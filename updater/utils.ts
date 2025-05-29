import { exec } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import type { AppInfo, DynamicCompose, Service } from "@runtipi/common/schemas";
import * as yaml from "js-yaml";
import { APPS_DIR, IGNORED_PREFIXES } from "./constants";
import type { Data } from "./types/cup";

const execAsync = promisify(exec);

const EXCLUDED_FOLDERS = ["__tests__"];

export async function getAppList(): Promise<string[]> {
  const entries = await fs.readdir(APPS_DIR, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory() && !EXCLUDED_FOLDERS.includes(entry.name)).map((dir) => dir.name);
}

export async function readJsonFile<T>(filepath: string): Promise<T> {
  const content = await fs.readFile(filepath, "utf-8");
  return JSON.parse(content);
}

export async function writeJsonFile<T>(filepath: string, data: T): Promise<void> {
  await fs.writeFile(filepath, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
  await runBiomCheck(filepath);
}

async function runBiomCheck(configFile: string): Promise<void> {
  try {
    const command = `npx @biomejs/biome check "${configFile}" --write`;
    await execAsync(command);
  } catch (error) {
    console.error(`Error running biome check on ${configFile}:`, error);
  }
}

export function shouldCheckImage(image: string): boolean {
  // Check if the image starts with any ignored prefixes
  const matchesIgnoredPrefix = IGNORED_PREFIXES.some((prefix) => image.startsWith(prefix));

  // Check if the tag contains a number (very primitve check indicating a version)
  const tagContainsNumber = /\d/.test(image.split(":").pop() || "");

  return !matchesIgnoredPrefix && tagContainsNumber;
}

// Define a type for docker-compose.yml structure
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

// Extract images from docker-compose.yml services
export function getImagesFromYaml(dockerComposeYml: DockerComposeYml): string[] {
  if (!dockerComposeYml?.services) return [];
  return Object.values(dockerComposeYml.services)
    .map((service) => service.image)
    .filter(Boolean);
}

// Update docker-compose.yml with new images
export function updateYamlWithNewImages(dockerComposeYml: DockerComposeYml, updates: Array<{ service: string; newImage: string }>): DockerComposeYml {
  const updatedYml = JSON.parse(JSON.stringify(dockerComposeYml)); // Deep clone

  for (const update of updates) {
    // Find service by name in the YAML
    if (updatedYml.services[update.service]) {
      updatedYml.services[update.service].image = update.newImage;
    }
  }

  return updatedYml;
}

export async function getAppData(appId: string): Promise<{
  config: AppInfo;
  compose: DynamicCompose;
  dockerComposeYml?: DockerComposeYml;
}> {
  const configPath = path.join(APPS_DIR, appId, "config.json");
  const composePath = path.join(APPS_DIR, appId, "docker-compose.json");
  const dockerComposeYmlPath = path.join(APPS_DIR, appId, "docker-compose.yml");

  // Check if docker-compose.yml exists
  let dockerComposeYml: DockerComposeYml | undefined = undefined;
  try {
    await fs.access(dockerComposeYmlPath);
    dockerComposeYml = await readYamlFile<DockerComposeYml>(dockerComposeYmlPath);
  } catch {
    // docker-compose.yml doesn't exist, which is fine
  }

  const [config, compose] = await Promise.all([readJsonFile<AppInfo>(configPath), readJsonFile<DynamicCompose>(composePath)]);

  return { config, compose, dockerComposeYml };
}

export async function checkImages(images: string[]): Promise<Data> {
  const command = `docker run -v /var/run/docker.sock:/var/run/docker.sock -t ghcr.io/sergi0g/cup check -r ${images.join(" ")}`;
  const { stdout } = await execAsync(command);
  return JSON.parse(stdout);
}

export function findMainService(services: DynamicCompose["services"], version: string): Service | undefined {
  return services.find((service) => service.isMain || service.image.includes(`:${version}`));
}

export async function readYamlFile<T>(filepath: string): Promise<T> {
  const content = await fs.readFile(filepath, "utf-8");
  return yaml.load(content) as T;
}

export async function writeYamlFile<T>(filepath: string, data: T): Promise<void> {
  const yamlContent = yaml.dump(data, {
    lineWidth: -1,
    noRefs: true,
    sortKeys: false,
    indent: 2,
  });
  await fs.writeFile(filepath, yamlContent, "utf-8");
}
