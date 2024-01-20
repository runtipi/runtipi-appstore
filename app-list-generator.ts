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

      apps[app] = {
        name: appConfigJson.name,
        description: appConfigJson.short_desc,
        link: appConfigJson.source,
      };
    } catch (e) {
      console.error(`Error parsing config for ${app}`);
    }
  }

  return { apps };
};

const appToReadme = async (app) => {
  return `- [${app.name}](${app.link}) - ${app.description}`;
};

const writeToReadme = async (appsList) => {
  let finalReadme = `# Tipi App Store ⛺️

This is the official repository for the Tipi App Store. It contains all the apps that are available for download on [Tipi](https://github.com/meienberger/runtipi).
    
## Apps available
    
${appsList}
    
## How to sumbit an app
    
If you want to see new apps on Tipi you can either:
    
- [Open an issue](https://github.com/meienberger/runtipi-appstore/issues) on this repository and members of the community will add it
- [Join the Discord](https://discord.gg/Bu9qEPnHsc) members of the community will add it.
- Fork this repo and create the necessary files for a Tipi app. Follow this [guide](<[https://github.com/meienberger/runtipi/wiki/Adding-your-own-app](https://www.runtipi.io/docs/contributing/adding-a-new-app)>)`;

  await fs.writeFileSync("README.md", finalReadme);
};

const main = async () => {
  const apps = await getAppsList();
  const appKeys = Object.keys(apps["apps"]);
  let appsList: string = "";

  for (let i = 0; i < appKeys.length; i++) {
    const appFinal = await appToReadme(apps["apps"][appKeys[i]]);
    if (i == 0) {
      appsList = appsList + appFinal;
    } else {
      appsList = appsList + "\n" + appFinal;
    }
  }

  await writeToReadme(appsList);
};

main();
