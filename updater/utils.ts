import { exec } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import type { AppInfo, DynamicCompose, Service } from "@runtipi/common/schemas";
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
}

export function shouldCheckImage(image: string): boolean {
  // Check if the image starts with any ignored prefixes
  const matchesIgnoredPrefix = IGNORED_PREFIXES.some((prefix) => image.startsWith(prefix));

  // Check if the tag contains a number (very primitve check indicating a version)
  const tagContainsNumber = /\d/.test(image.split(":").pop() || "");

  return !matchesIgnoredPrefix && tagContainsNumber;
}

export async function getAppData(appId: string): Promise<{
  config: AppInfo;
  compose: DynamicCompose;
}> {
  const configPath = path.join(APPS_DIR, appId, "config.json");
  const composePath = path.join(APPS_DIR, appId, "docker-compose.json");

  const [config, compose] = await Promise.all([readJsonFile<AppInfo>(configPath), readJsonFile<DynamicCompose>(composePath)]);

  return { config, compose };
}

export async function checkImages(images: string[]): Promise<Data> {
  const command = `docker run -v /var/run/docker.sock:/var/run/docker.sock -t ghcr.io/sergi0g/cup check -r ${images.join(" ")}`;
  const { stdout } = await execAsync(command);
  return JSON.parse(stdout);
}

export function findMainService(services: DynamicCompose["services"], version: string): Service | undefined {
  return services.find((service) => service.isMain || service.image.includes(`:${version}`));
}
