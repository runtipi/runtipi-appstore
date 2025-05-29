import path from "node:path";
import { createPullRequest } from "./github";
import type { UpdateInfo } from "./types/app";
import { checkImages, findMainService, getAppData, getAppList, shouldCheckImage, writeJsonFile } from "./utils";

async function main() {
  try {
    const apps = await getAppList();

    for (const appId of apps) {
      console.log(`Processing ${appId}...`);

      // Get app configuration and compose file
      const { config, compose } = await getAppData(appId);

      if (!config.version || config.version === "latest") {
        console.warn(`Skipping ${appId} because no version is declared in config`);
        continue;
      }

      // Get list of images to check
      const imagesToCheck = compose.services.map((service) => service.image).filter(shouldCheckImage);

      if (imagesToCheck.length === 0) {
        console.log(`No images to check for ${appId}`);
        continue;
      }

      // Check for updates
      const checkResult = await checkImages(imagesToCheck);

      // Find main service and its update info
      const mainService = findMainService(compose.services, config.version);
      if (!mainService) {
        console.warn(`Could not identify main service for ${appId}`);
        continue;
      }

      const appUpdates: UpdateInfo["updates"] = [];
      let newVersion = config.version;

      // Process updates
      for (const image of checkResult.images) {
        const service = compose.services.find((s) => image.reference.includes(s.image));
        if (!service || !image.result.has_update || !image.result.info) continue;

        const updateInfo = image.result.info;
        if (updateInfo.type !== "version") continue;

        const isMainService = service === mainService;
        if (isMainService) {
          newVersion = updateInfo.new_version;
        }

        appUpdates.push({
          service: service.name,
          oldImage: image.reference,
          newImage: `${image.parts.registry}/${image.parts.repository}:${updateInfo.new_tag}`
            .replace(/^registry-1\.docker\.io\//, "")
            .replace(/^library\//, ""),
          updateType: updateInfo.version_update_type,
        });
      }

      if (appUpdates.length > 0) {
        // Update config.json
        const configPath = path.join("apps", appId, "config.json");
        const newConfig = {
          ...config,
          version: newVersion,
          tipi_version: config.tipi_version + 1,
          updated_at: Date.now(),
        };
        await writeJsonFile(configPath, newConfig);

        // Update docker-compose.json
        const composePath = path.join("apps", appId, "docker-compose.json");
        const newCompose = {
          ...compose,
          services: compose.services.map((service) => {
            const update = appUpdates.find((u) => u.service === service.name);
            return update ? { ...service, image: update.newImage } : service;
          }),
        };
        await writeJsonFile(composePath, newCompose);

        // Create or update PR for this app
        await createPullRequest(appId, {
          appId,
          oldVersion: config.version,
          newVersion,
          updates: appUpdates,
        });
        console.log(`Processed pull request for ${appId}`);
      } else {
        console.log(`No updates found for ${appId}`);
      }
    }
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
