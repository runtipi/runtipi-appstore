import fs from "fs";

type App = {
  name: string;
  description: string;
  git_repo: string;
};

const generateReadme = (apps: Record<string, App>): string => {
  const appEntries = Object.entries(apps);

  const appListMarkdown = appEntries
    .map(
      ([_, appData]) =>
        `- [${appData.name}](${appData.git_repo}) - ${appData.description}`
    )
    .join("\n");

  return `# Tipi App Store ⛺️

  This is the official repository for the Tipi App Store. It contains all the apps that are available for download on [Tipi](https://github.com/meienberger/runtipi).
  
  ## Apps available
  
  ${appListMarkdown}
  
  ## How to sumbit an app
  
  If you want to see new apps on Tipi you can either:
  
  - [Open an issue](https://github.com/meienberger/runtipi-appstore/issues) on this repository and members of the community will add it
  - [Join the Discord](https://discord.gg/Bu9qEPnHsc) members of the community will add it.
  - Fork this repo and create the necessary files for a Tipi app. Follow this [guide](<[https://github.com/meienberger/runtipi/wiki/Adding-your-own-app](https://www.runtipi.io/docs/contributing/adding-a-new-app)>)
  `;
};

const fetchAppsData = async (): Promise<Record<string, App>> => {
  const apps: Record<string, App> = {};

  // Fetch apps from the app store repo
  const res = await fetch(
    "https://api.github.com/repos/runtipi/runtipi-appstore/contents/apps"
  );

  if (!res.ok) {
    console.error("Failed to fetch apps from the repository.");
    return {};
  }

  const appsData = await res.json();
  const appNames = appsData.map((app) => app.name);

  for (const appName of appNames) {
    const configResponse = await fetch(
      `https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/${appName}/config.json`
    );

    if (configResponse.ok) {
      try {
        const appConfigJson = await configResponse.json();

        const appData: App = {
          name: appConfigJson.name,
          description: appConfigJson.short_desc,
          git_repo: appConfigJson.source,
        };

        apps[appName] = appData;
      } catch (e) {
        console.error(`Error parsing config for ${appName}`);
      }
    } else {
      console.error(`Failed to fetch config for ${appName}`);
    }
  }

  return apps;
};

const main = async () => {
  const apps = await fetchAppsData();
  const readmeContent = generateReadme(apps);
  fs.writeFileSync("README.md", readmeContent, "utf-8");
};

main();
