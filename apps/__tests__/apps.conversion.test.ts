import fs from "node:fs";
import { convertLegacyToYaml } from "@runtipi/common/schemas";
import Ajv from "ajv";
import { getAppConfigs } from "./utils/configs.js";

// @ts-expect-error
const ajv = new Ajv({ allErrors: true, strict: false });

describe("Each dynamic compose json should be convertable to a valid docker compose file", async () => {
  const apps = getAppConfigs();

  const schemaUrl = "https://raw.githubusercontent.com/compose-spec/compose-spec/master/schema/compose-spec.json";
  const response = await fetch(schemaUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch schema: ${response.statusText}`);
  }
  const schema = await response.json();
  // @ts-expect-error
  delete schema.$schema;

  const validate = ajv.compile(schema);

  for (const app of apps) {
    const dockerComposeFile = fs.readFileSync(`./apps/${app.id}/docker-compose.json`).toString();
    const composeJson = JSON.parse(dockerComposeFile);

    test(app.id, () => {
      const res = convertLegacyToYaml(composeJson);

      try {
        const valid = validate(res);

        expect(res).toBeDefined();
        expect(valid).toBe(true);
      } catch (err) {
        console.error(validate.errors);
        expect(err).toBeUndefined();
      }
    });
  }
});
