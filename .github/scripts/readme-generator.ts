import { exec } from 'child_process';
import fs from 'fs';

type App = {
  id: string;
  name: string;
  description: string;
  source: string;
  port: number;
};

const getAppsList = async () => {
  const apps: Record<string, App> = {};

  const appNames = fs.readdirSync(__dirname + '/../../apps');

  for (const app of appNames) {
    try {
      const appConfig = fs.readFileSync(`${__dirname}/../../apps/${app}/config.json`, 'utf8');
      const appConfigJson = JSON.parse(appConfig);

      if (!appConfigJson.deprecated) {
        apps[app] = {
          id: appConfigJson.id,
          name: appConfigJson.name,
          description: appConfigJson.short_desc,
          source: appConfigJson.source,
          port: appConfigJson.port,
        };
      }
    } catch (e) {
      console.error(`Error parsing config for ${app}`);
    }
  }

  return { apps };
};

const appToReadme = async (app: App) => {
  return `| [${app.name}](${app.source}) | ${app.description} | ${app.port} |`;
};

const writeToReadme = (appsList: string, count: number) => {
  const baseReadme = fs.readFileSync(__dirname + '/../../templates/README.md', 'utf8');
  let finalReadme = baseReadme.replace('<!appsList>', appsList);
  finalReadme = finalReadme.replace('<!appsCount>', count.toString());
  fs.writeFileSync(__dirname + '/../../README.md', finalReadme);
};

const main = async () => {
  const { apps } = await getAppsList();
  const appKeys = Object.keys(apps).sort();
  let appsList = '';

  for (let i = 0; i < appKeys.length; i++) {
    const appFinal = await appToReadme(apps[appKeys[i]]);
    appsList = appsList + (appFinal + '\n');
  }

  writeToReadme(appsList, appKeys.length);
  exec(`npx prettier ${__dirname + '/../../README.md'} --write`, (stdout, stderr) => {
    if (stderr) {
      console.error(stderr);
    } else if (stdout) {
      console.log(stdout);
    }
  });
};

main();
