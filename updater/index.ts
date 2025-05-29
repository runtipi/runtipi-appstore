import path from "node:path";
import { createPullRequest } from "./github";
import type { UpdateInfo } from "./types/app";
import {
  checkImages,
  findMainService,
  getAppData,
  getAppList,
  getImagesFromYaml,
  shouldCheckImage,
  updateYamlWithNewImages,
  writeJsonFile,
  writeYamlFile,
} from "./utils";

const MAX_PRS = 5;

async function main() {
  try {
    const apps = await getAppList();

    let prCount = 0;

    for (const appId of apps) {
      if (prCount >= MAX_PRS) {
        console.log("Reached maximum number of PRs to create in this run. Exiting.");
        break;
      }

      console.log(`Processing ${appId}...`);

      // Get app configuration and compose file
      const { config, compose, dockerComposeYml } = await getAppData(appId);

      if (!config.version || config.version === "latest") {
        console.warn(`Skipping ${appId} because no version is declared in config`);
        continue;
      }

      // Get list of images to check from both JSON and YAML compose files
      const imagesToCheck = [
        ...compose.services.map((service) => service.image),
        ...(dockerComposeYml ? getImagesFromYaml(dockerComposeYml) : []),
      ].filter(shouldCheckImage);

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
        console.log(`Processing image: ${image.reference}`);
        const service = compose.services.find((s) => image.reference.includes(s.image));
        const yamlServiceName = dockerComposeYml
          ? Object.keys(dockerComposeYml.services).find((serviceName) => image.reference.includes(dockerComposeYml.services[serviceName].image))
          : null;

        if ((!service && !yamlServiceName) || !image.result.has_update || !image.result.info) continue;

        const updateInfo = image.result.info;
        if (updateInfo.type !== "version") continue;

        const isMainService = service === mainService;
        if (isMainService) {
          newVersion = updateInfo.new_version;
        }

        const newImage = `${image.parts.registry}/${image.parts.repository}:${updateInfo.new_tag}`
          .replace(/^registry-1\.docker\.io\//, "")
          .replace(/^library\//, "");

        appUpdates.push({
          service: service?.name || yamlServiceName || "unknown",
          oldImage: image.reference,
          newImage,
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

        // Update docker-compose.yml if it exists
        if (dockerComposeYml) {
          const dockerComposeYmlPath = path.join("apps", appId, "docker-compose.yml");
          const yamlUpdates = appUpdates.filter((update) => Object.keys(dockerComposeYml.services).includes(update.service));

          if (yamlUpdates.length > 0) {
            const newDockerComposeYml = updateYamlWithNewImages(dockerComposeYml, yamlUpdates);
            await writeYamlFile(dockerComposeYmlPath, newDockerComposeYml);
          }
        }

        // Create or update PR for this app
        await createPullRequest(appId, {
          appId,
          oldVersion: config.version,
          newVersion,
          updates: appUpdates,
        });
        prCount++;
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
