import fs from "node:fs";

type FormField = {
  type: "random";
  required: boolean;
};

interface AppConfig {
  id: string;
  port: number;
  categories: string[];
  requirements?: {
    ports?: number[];
  };
  name: string;
  description: string;
  version?: string;
  tipi_version: number;
  short_desc: string;
  author: string;
  source: string;
  available: boolean;
  form_fields?: FormField[];
  supported_architectures: string[];
  dynamic_config: boolean;
  created_at: number;
  updated_at: number;
}

export const getAppConfigs = (): AppConfig[] => {
  const apps: AppConfig[] = [];

  const appsDir = fs.readdirSync("./apps");

  for (const app of appsDir) {
    const path = `./apps/${app}/config.json`;

    if (fs.existsSync(path)) {
      const configFile = fs.readFileSync(path).toString();

      try {
        const config: AppConfig = JSON.parse(configFile);
        if (config.available) {
          apps.push(config);
        }
      } catch (_) {
        console.error("Error parsing config file", app);
      }
    }
  }

  return apps;
};
