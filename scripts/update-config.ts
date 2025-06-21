import fs from "node:fs/promises";
import path from "node:path";
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
      [key: string]: unknown;
    }
  >;
  [key: string]: unknown;
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

const updateAppConfig = async (packageFile: string, newVersion: string) => {
  try {
    const packageRoot = path.dirname(packageFile);
    const configPath = path.join(packageRoot, "config.json");
    const dockerComposeYmlPath = path.join(packageRoot, "docker-compose.yml");

    const config = await readJsonFile<AppInfo>(configPath);
    const dockerComposeYml = await readYamlFile<DockerComposeYml>(dockerComposeYmlPath);

    if (dockerComposeYml) {
      dockerComposeYml.services = Object.fromEntries(
        Object.entries(dockerComposeYml.services).map(([serviceName, service]) => {
          if (service.image.startsWith(packageName)) {
            const newImage = service.image.replace(/:[^:]+$/, `:${newVersion}`);
            return [serviceName, { ...service, image: newImage }];
          }
          return [serviceName, service];
        }),
      );
    }

    config.tipi_version = config.tipi_version + 1;
    config.version = newVersion;
    config.updated_at = Date.now();

    await fs.writeFile(dockerComposeYmlPath, yaml.dump(dockerComposeYml, { lineWidth: -1, noRefs: true, sortKeys: false, indent: 2 }));
    await fs.writeFile(configPath, JSON.stringify(config, null, 2));
  } catch (e) {
    console.error(`Failed to update app config, error: ${e}`);
  }
};

if (!packageFile || !newVersion) {
  console.error("Usage: node update-config.js <packageFile> <newVersion>");
  process.exit(1);
}
updateAppConfig(packageFile, newVersion);
