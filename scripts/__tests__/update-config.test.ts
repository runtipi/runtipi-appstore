import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import jsyaml from "js-yaml";
import { updateAppConfig } from "../update-config";

describe("updateAppConfig", () => {
  it("updates a YAML main service and syncs config version", async () => {
    const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "update-config-main-"));
    const appDir = path.join(tempRoot, "apps", "demo");

    await fs.mkdir(appDir, { recursive: true });
    await fs.writeFile(path.join(appDir, "config.json"), JSON.stringify({ version: "1.2.3", tipi_version: 3, updated_at: 1000 }, null, 2));
    await fs.writeFile(
      path.join(appDir, "docker-compose.yml"),
      ["services:", "  demo:", "    image: 'ghcr.io/example/demo:1.2.3'", "    x-runtipi:", "      is_main: true"].join("\n"),
    );

    await updateAppConfig(path.join(appDir, "docker-compose.yml"), "1.2.4", "ghcr.io/example/demo");

    const config = JSON.parse(await fs.readFile(path.join(appDir, "config.json"), "utf8")) as {
      version: string;
      tipi_version: number;
      updated_at: number;
    };
    const compose = jsyaml.load(await fs.readFile(path.join(appDir, "docker-compose.yml"), "utf8")) as {
      services: Record<string, { image: string }>;
    };

    expect(compose.services.demo?.image).toBe("ghcr.io/example/demo:1.2.4");
    expect(config.version).toBe("1.2.4");
    expect(config.tipi_version).toBe(4);
    expect(config.updated_at).toBeGreaterThan(1000);
  });

  it("updates non-main YAML services without changing config version", async () => {
    const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "update-config-sidecar-"));
    const appDir = path.join(tempRoot, "apps", "demo");

    await fs.mkdir(appDir, { recursive: true });
    await fs.writeFile(path.join(appDir, "config.json"), JSON.stringify({ version: "1.2.3", tipi_version: 3, updated_at: 1000 }, null, 2));
    await fs.writeFile(
      path.join(appDir, "docker-compose.yml"),
      [
        "services:",
        "  demo:",
        "    image: 'ghcr.io/example/demo:1.2.3'",
        "    x-runtipi:",
        "      is_main: true",
        "  db:",
        "    image: 'postgres:14'",
      ].join("\n"),
    );

    await updateAppConfig(path.join(appDir, "docker-compose.yml"), "15", "postgres");

    const config = JSON.parse(await fs.readFile(path.join(appDir, "config.json"), "utf8")) as {
      version: string;
      tipi_version: number;
      updated_at: number;
    };
    const compose = jsyaml.load(await fs.readFile(path.join(appDir, "docker-compose.yml"), "utf8")) as {
      services: Record<string, { image: string }>;
    };

    expect(compose.services.db?.image).toBe("postgres:15");
    expect(config.version).toBe("1.2.3");
    expect(config.tipi_version).toBe(4);
    expect(config.updated_at).toBeGreaterThan(1000);
  });
});
