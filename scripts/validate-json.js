import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ajv = new Ajv2020({ allErrors: true, strict: false });

async function validateJson() {
  // Fetch the schema
  const schemaUrl = "https://schemas.runtipi.io/dynamic-compose.json";
  const response = await fetch(schemaUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch schema: ${response.statusText}`);
  }
  const schema = await response.json();

  const validate = ajv.compile(schema);

  // Find all docker-compose.json files
  const appsDir = path.join(__dirname, "..", "apps");
  const files = [];

  function findFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findFiles(fullPath);
      } else if (item === "docker-compose.json") {
        files.push(fullPath);
      }
    }
  }

  findFiles(appsDir);

  let hasErrors = false;

  for (const file of files) {
    try {
      const data = JSON.parse(fs.readFileSync(file, "utf8"));
      // Remove $schema for validation as it's meta
      const { $schema: _, ...dataToValidate } = data;
      const valid = validate(dataToValidate);
      if (!valid) {
        console.error(`Validation failed for ${file}:`);
        console.error(validate.errors);
        hasErrors = true;
      } else {
        console.log(`✓ ${path.relative(path.join(__dirname, ".."), file)}`);
      }
    } catch (error) {
      console.error(`Error reading/parsing ${file}: ${error.message}`);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log("All JSON files are valid!");
  }
}

validateJson().catch((error) => {
  console.error("Validation script error:", error);
  process.exit(1);
});
