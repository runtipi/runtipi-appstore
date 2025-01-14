import { promises } from "node:fs";
import path, { resolve } from "node:path";

const ignoreFiles = ["app-info-schema.json", "compose-schema.json", "docker-compose.common.yml", "dynamic-compose-schema.json", "schema.json"];

const dynamicComposeSchemaPath = "../dynamic-compose-schema.json";
const configSchemaPath = "../app-info-schema.json";

const existsAsync = (path) =>
  promises
    .stat(path)
    .then(() => true)
    .catch(() => false);

const main = async () => {
  const apps = (await promises.readdir(`${__dirname}/../../apps`)).filter((app) => !ignoreFiles.includes(app));

  for (const app of apps) {
    const appDir = resolve(`${__dirname}/../../apps/${app}`);
    const appConfigPath = resolve(`${appDir}/config.json`);
    const appDynamicComposePath = resolve(`${appDir}/docker-compose.json`);

    if (await existsAsync(appConfigPath)) {
      try {
        const appConfig = JSON.parse(await promises.readFile(appConfigPath, "utf8"));
        appConfig.$schema = configSchemaPath;
        await promises.writeFile(appConfigPath, JSON.stringify(appConfig, null, 2));
        console.log(`Set config schema for ${app}`);
      } catch (e) {
        console.error(`Error setting config schema for ${app}, error: ${e}`);
      }
    }

    if (await existsAsync(appDynamicComposePath)) {
      try {
        const appDynamicCompose = JSON.parse(await promises.readFile(appDynamicComposePath, "utf8"));
        appDynamicCompose.$schema = dynamicComposeSchemaPath;
        await promises.writeFile(appDynamicComposePath, JSON.stringify(appDynamicCompose, null, 2));
        console.log(`Set dynamic compose schema for ${app}`);
      } catch (e) {
        console.error(`Error setting dynamic compose schema for ${app}, error: ${e}`);
      }
    }
  }
};

main();
