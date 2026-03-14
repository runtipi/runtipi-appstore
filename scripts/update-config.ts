import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AppInfo } from "@runtipi/common/schemas";
import * as yaml from "js-yaml";

const packageFile = process.argv[2];
const newVersion = process.argv[3];
const packageName = process.argv[4];

console.log(`Updating app config for package: ${packageFile}, new version: ${newVersion}, package name: ${packageName}`);

interface DockerComposeYml {
  services: Record<
    string,
    {
      image: string;
      "x-runtipi"?: {
        is_main?: boolean;
      };
      [key: string]: unknown;
    }
  >;
  [key: string]: unknown;
}

interface DockerComposeJson {
  services: Array<{
    image: string;
    isMain: boolean;
  }>;
}

export async function readYamlFile<T>(filepath: string): Promise<T | null> {
  try {
    const content = await fs.readFile(filepath, "utf-8");
    return yaml.load(content) as T;
  } catch (_) {
    return null;
  }
}

export async function readJsonFile<T>(filepath: string): Promise<T> {
  const content = await fs.readFile(filepath, "utf-8");
  return JSON.parse(content);
}

export async function readJsonFileIfExists<T>(filepath: string): Promise<T | null> {
  try {
    return await readJsonFile<T>(filepath);
  } catch (_) {
    return null;
  }
}

export const updateAppConfig = async (packageFile: string, newVersion: string, depName = packageName) => {
  try {
    const packageRoot = path.dirname(packageFile);
    const configPath = path.join(packageRoot, "config.json");
    const dockerComposeYmlPath = path.join(packageRoot, "docker-compose.yml");
    const dockerComposeJsonPath = path.join(packageRoot, "docker-compose.json");

    const config = await readJsonFile<AppInfo>(configPath);
    const dockerComposeYml = await readYamlFile<DockerComposeYml>(dockerComposeYmlPath);
    const dockerComposeJson = await readJsonFileIfExists<DockerComposeJson>(dockerComposeJsonPath);

    if (dockerComposeYml) {
      dockerComposeYml.services = Object.fromEntries(
        Object.entries(dockerComposeYml.services).map(([serviceName, service]) => {
          if (depName && service.image.startsWith(depName)) {
            const newImage = service.image.replace(/:[^:]+$/, `:${newVersion}`);
            return [serviceName, { ...service, image: newImage }];
          }
          return [serviceName, service];
        }),
      );
    }

    const mainYamlService = dockerComposeYml ? Object.values(dockerComposeYml.services).find((service) => service["x-runtipi"]?.is_main) : null;

    if (depName && mainYamlService?.image === `${depName}:${newVersion}`) {
      config.version = newVersion;
    } else if (dockerComposeJson) {
      for (const service of dockerComposeJson.services) {
        if (depName && service.image === `${depName}:${newVersion}` && service.isMain) {
          config.version = newVersion;
        }
      }
    }

    config.tipi_version = config.tipi_version + 1;
    config.updated_at = Date.now();

    if (dockerComposeYml) {
      await fs.writeFile(dockerComposeYmlPath, yaml.dump(dockerComposeYml, { lineWidth: -1, noRefs: true, sortKeys: false, indent: 2 }));
    }
    await fs.writeFile(configPath, JSON.stringify(config, null, 2));
  } catch (e) {
    console.error(`Failed to update app config, error: ${e}`);
  }
};

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  if (!packageFile || !newVersion) {
    console.error("Usage: node update-config.js <packageFile> <newVersion>");
    process.exit(1);
  }

  updateAppConfig(packageFile, newVersion);
}
