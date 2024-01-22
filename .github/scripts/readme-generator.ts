import fs from "fs";

type App = {
  name: string;
  description: string;
  link: string;
};

const getAppsList = async () => {
  const apps: Record<string, App> = {};
  // fetch apps from app store repo
  const res = await fetch(
    "https://api.github.com/repos/runtipi/runtipi-appstore/contents/apps"
  );

  const data = await res.json();
  const appNames = data.map((app) => app.name);

  for (const app of appNames) {
    const config = await fetch(
      `https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/${app}/config.json`
    );
    const appConfig = await config.text();
    try {
      const appConfigJson = JSON.parse(appConfig);

      if (!appConfigJson.deprecated) {
        apps[app] = {
          name: appConfigJson.name,
          description: appConfigJson.short_desc,
          link: appConfigJson.source,
        };
      }
    } catch (e) {
      console.error(`Error parsing config for ${app}`);
    }
  }

  return { apps };
};

const appToReadme = async (app) => {
  return `- [${app.name}](${app.link}) - ${app.description}`;
};

const writeToReadme = (appsList) => {
  const baseReadme = fs.readFileSync(__dirname + "/../../README.md", "utf8");
  const finalReadme = baseReadme.replace("<!appsList>", appsList);
  fs.writeFileSync(__dirname + "/../../README.md", finalReadme);
};

const main = async () => {
  const apps = await getAppsList();
  const appKeys = Object.keys(apps["apps"]);
  let appsList: string = "";

  for (let i = 0; i < appKeys.length; i++) {
    const appFinal = await appToReadme(apps["apps"][appKeys[i]]);
    appsList += i == 0 ? appFinal : "\n" + appFinal;
  }

  writeToReadme(appsList);
};

main();
