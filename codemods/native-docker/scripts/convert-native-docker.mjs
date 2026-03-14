import fs from "node:fs/promises";
import { convertLegacyToYaml } from "@runtipi/common/schemas";
import path from "node:path";

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function stripUndefinedDeep(value) {
  if (Array.isArray(value)) {
    return value.map((item) => stripUndefinedDeep(item)).filter((item) => item !== undefined);
  }

  if (isPlainObject(value)) {
    const cleaned = {};

    for (const [key, child] of Object.entries(value)) {
      const cleanedChild = stripUndefinedDeep(child);
      if (cleanedChild !== undefined) {
        cleaned[key] = cleanedChild;
      }
    }

    return cleaned;
  }

  return value;
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isPrimitiveLabelValue(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}

function isLabelMap(value) {
  return isPlainObject(value) && Object.values(value).every((item) => isPrimitiveLabelValue(item));
}

function isStringNumberOrUndefined(value) {
  return value === undefined || typeof value === "string" || typeof value === "number";
}

function pushError(errors, path, message) {
  errors.push(`${path}: ${message}`);
}

function validateXRuntipiService(value, path, errors) {
  if (!isPlainObject(value)) {
    pushError(errors, path, "must be an object");
    return;
  }

  if (value.is_main !== undefined && typeof value.is_main !== "boolean") {
    pushError(errors, `${path}.is_main`, "must be a boolean");
  }

  if (!isStringNumberOrUndefined(value.internal_port)) {
    pushError(errors, `${path}.internal_port`, "must be a string or number");
  }

  if (value.add_to_main_network !== undefined && typeof value.add_to_main_network !== "boolean") {
    pushError(errors, `${path}.add_to_main_network`, "must be a boolean");
  }
}

function validateServiceObject(service, path, errors, { requireImage }) {
  if (!isPlainObject(service)) {
    pushError(errors, path, "must be an object");
    return;
  }

  if (requireImage && typeof service.image !== "string") {
    pushError(errors, `${path}.image`, "must be a string");
  }

  if (service.networks !== undefined && !isPlainObject(service.networks) && !isStringArray(service.networks)) {
    pushError(errors, `${path}.networks`, "must be an object or string array");
  }

  if (service.ports !== undefined && !Array.isArray(service.ports)) {
    pushError(errors, `${path}.ports`, "must be an array");
  }

  if (service.labels !== undefined && !isLabelMap(service.labels) && !isStringArray(service.labels)) {
    pushError(errors, `${path}.labels`, "must be an object or string array");
  }

  if (service["x-runtipi"] !== undefined) {
    validateXRuntipiService(service["x-runtipi"], `${path}.x-runtipi`, errors);
  }
}

export function validateComposeYamlDocument(document) {
  const errors = [];

  if (!isPlainObject(document)) {
    return ["document: must be an object"];
  }

  if (!isPlainObject(document.services)) {
    pushError(errors, "services", "must be an object keyed by service name");
  } else {
    for (const [serviceName, service] of Object.entries(document.services)) {
      validateServiceObject(service, `services.${serviceName}`, errors, { requireImage: true });
    }
  }

  if (!isPlainObject(document["x-runtipi"])) {
    pushError(errors, "x-runtipi", "must be an object");
  } else {
    const xRuntipi = document["x-runtipi"];

    if (xRuntipi.schema_version !== 1 && xRuntipi.schema_version !== 2) {
      pushError(errors, "x-runtipi.schema_version", "must be 1 or 2");
    }

    if (xRuntipi.overrides !== undefined) {
      if (!Array.isArray(xRuntipi.overrides)) {
        pushError(errors, "x-runtipi.overrides", "must be an array");
      } else {
        xRuntipi.overrides.forEach((override, index) => {
          const overridePath = `x-runtipi.overrides[${index}]`;

          if (!isPlainObject(override)) {
            pushError(errors, overridePath, "must be an object");
            return;
          }

          if (override.architecture !== "amd64" && override.architecture !== "arm64") {
            pushError(errors, `${overridePath}.architecture`, "must be 'amd64' or 'arm64'");
          }

          if (!isPlainObject(override.services)) {
            pushError(errors, `${overridePath}.services`, "must be an object keyed by service name");
            return;
          }

          for (const [serviceName, service] of Object.entries(override.services)) {
            validateServiceObject(service, `${overridePath}.services.${serviceName}`, errors, { requireImage: true });
          }
        });
      }
    }
  }

  return errors;
}

function assertValidComposeYamlDocument(document, appName) {
  const errors = validateComposeYamlDocument(document);

  if (errors.length === 0) {
    return;
  }

  throw new Error(`Generated docker-compose.yml for '${appName}' does not match the expected Runtipi compose schema:\n- ${errors.join("\n- ")}`);
}

function parseBoolean(value) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value !== "string") {
    return false;
  }

  return value.toLowerCase() === "true";
}

function quoteString(value) {
  return `'${value.replaceAll("'", "''")}'`;
}

function formatKey(key) {
  if (/^[A-Za-z0-9_-]+$/.test(key)) {
    return key;
  }

  return quoteString(key);
}

function isInlineValue(value) {
  if (value === null) {
    return true;
  }

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return true;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (isPlainObject(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
}

function formatInlineValue(value) {
  if (value === null) {
    return "null";
  }

  if (typeof value === "string") {
    return quoteString(value);
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (Array.isArray(value) && value.length === 0) {
    return "[]";
  }

  if (isPlainObject(value) && Object.keys(value).length === 0) {
    return "{}";
  }

  throw new Error(`Cannot inline value: ${JSON.stringify(value)}`);
}

function renderObjectEntries(entries, indent) {
  const padding = " ".repeat(indent);
  const lines = [];

  for (const [key, value] of entries) {
    if (isInlineValue(value)) {
      lines.push(`${padding}${formatKey(key)}: ${formatInlineValue(value)}`);
      continue;
    }

    lines.push(`${padding}${formatKey(key)}:`);
    lines.push(renderYaml(value, indent + 2));
  }

  return lines.join("\n");
}

function renderArrayItem(item, indent) {
  const padding = " ".repeat(indent);

  if (isInlineValue(item)) {
    return `${padding}- ${formatInlineValue(item)}`;
  }

  if (Array.isArray(item)) {
    const nested = renderYaml(item, indent + 2);
    return `${padding}-\n${nested}`;
  }

  const entries = Object.entries(item);
  const [firstKey, firstValue] = entries[0];
  const lines = [];

  if (isInlineValue(firstValue)) {
    lines.push(`${padding}- ${formatKey(firstKey)}: ${formatInlineValue(firstValue)}`);
  } else {
    lines.push(`${padding}- ${formatKey(firstKey)}:`);
    lines.push(renderYaml(firstValue, indent + 4));
  }

  if (entries.length > 1) {
    lines.push(renderObjectEntries(entries.slice(1), indent + 2));
  }

  return lines.join("\n");
}

export function renderYaml(value, indent = 0) {
  if (Array.isArray(value)) {
    return value.map((item) => renderArrayItem(item, indent)).join("\n");
  }

  if (isPlainObject(value)) {
    return renderObjectEntries(Object.entries(value), indent);
  }

  return `${" ".repeat(indent)}${formatInlineValue(value)}`;
}

export function convertComposeJsonDocument(document) {
  const converted = convertLegacyToYaml(document);
  const existingXRuntipi = isPlainObject(converted["x-runtipi"]) ? converted["x-runtipi"] : {};

  return stripUndefinedDeep({
    ...converted,
    "x-runtipi": {
      schema_version: typeof document?.schemaVersion === "number" ? document.schemaVersion : 2,
      ...existingXRuntipi,
    },
  });
}

export function convertComposeJsonToYaml(document) {
  return `${renderYaml(convertComposeJsonDocument(document))}\n`;
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function findComposeJsonFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findComposeJsonFiles(entryPath)));
      continue;
    }

    if (entry.isFile() && entry.name === "docker-compose.json") {
      files.push(entryPath);
    }
  }

  return files;
}

async function resolveComposeJsonFiles(root, appsDir, app) {
  const appsPath = path.resolve(root, appsDir);

  if (app) {
    const composePath = path.join(appsPath, app, "docker-compose.json");
    if (!(await pathExists(composePath))) {
      throw new Error(`No docker-compose.json found for app '${app}' in ${appsPath}`);
    }
    return [composePath];
  }

  if (!(await pathExists(appsPath))) {
    throw new Error(`Apps directory does not exist: ${appsPath}`);
  }

  return findComposeJsonFiles(appsPath);
}

export async function runConversion(options) {
  const root = path.resolve(options.root ?? ".");
  const appsDir = options.appsDir ?? "apps";
  const app = options.app ?? "";
  const write = Boolean(options.write);
  const force = Boolean(options.force);
  const deleteJson = Boolean(options.deleteJson);

  const composeJsonFiles = await resolveComposeJsonFiles(root, appsDir, app);
  const results = [];

  for (const composeJsonPath of composeJsonFiles) {
    const composeJson = JSON.parse(await fs.readFile(composeJsonPath, "utf8"));
    const convertedCompose = convertComposeJsonDocument(composeJson);
    const appName = path.basename(path.dirname(composeJsonPath));
    assertValidComposeYamlDocument(convertedCompose, appName);
    const yaml = `${renderYaml(convertedCompose)}\n`;
    const composeYamlPath = path.join(path.dirname(composeJsonPath), "docker-compose.yml");
    const composeYamlExists = await pathExists(composeYamlPath);

    if (!write) {
      results.push({
        app: appName,
        composeJsonPath,
        composeYamlPath,
        action: composeYamlExists ? "would_overwrite" : "would_create",
        yaml,
      });
      continue;
    }

    if (composeYamlExists && !force) {
      results.push({
        app: appName,
        composeJsonPath,
        composeYamlPath,
        action: "skipped_existing",
        yaml,
      });
      continue;
    }

    await fs.writeFile(composeYamlPath, yaml, "utf8");

    if (deleteJson) {
      await fs.unlink(composeJsonPath);
    }

    results.push({
      app: appName,
      composeJsonPath,
      composeYamlPath,
      action: composeYamlExists ? "overwritten" : "created",
      yaml,
    });
  }

  return results;
}

function parseArgs(argv) {
  const options = {
    root: ".",
    appsDir: "apps",
    app: "",
    write: false,
    force: false,
    deleteJson: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    const next = argv[index + 1];

    if (argument === "--root") {
      options.root = next;
      index += 1;
      continue;
    }

    if (argument === "--apps-dir") {
      options.appsDir = next;
      index += 1;
      continue;
    }

    if (argument === "--app") {
      options.app = next;
      index += 1;
      continue;
    }

    if (argument === "--write") {
      options.write = parseBoolean(next);
      index += 1;
      continue;
    }

    if (argument === "--force") {
      options.force = parseBoolean(next);
      index += 1;
      continue;
    }

    if (argument === "--delete-json") {
      options.deleteJson = parseBoolean(next);
      index += 1;
      continue;
    }

    if (argument === "--help") {
      options.help = true;
    }
  }

  return options;
}

function printHelp() {
  console.log("Usage: node convert-native-docker.mjs [--root PATH] [--apps-dir PATH] [--app ID] [--write true|false] [--force true|false] [--delete-json true|false]");
}

export async function runCli(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);

  if (options.help) {
    printHelp();
    return 0;
  }

  const results = await runConversion(options);

  if (results.length === 0) {
    console.log("No docker-compose.json files found.");
    return 0;
  }

  for (const result of results) {
    const relativeYamlPath = path.relative(path.resolve(options.root), result.composeYamlPath);
    console.log(`${result.action}: ${result.app} -> ${relativeYamlPath}`);
  }

  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    const exitCode = await runCli();
    process.exit(exitCode);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
