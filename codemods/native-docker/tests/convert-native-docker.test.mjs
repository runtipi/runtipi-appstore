import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { convertComposeJsonToYaml, runConversion, validateComposeYamlDocument } from "../scripts/convert-native-docker.mjs";

test("converts the documented gotify example", () => {
  const input = {
    $schema: "https://schemas.runtipi.io/v2/dynamic-compose.json",
    schemaVersion: 2,
    services: [
      {
        name: "gotify",
        image: "gotify/server:2.7.3",
        isMain: true,
        internalPort: 80,
        environment: [
          { key: "GOTIFY_DEFAULTUSER_NAME", value: "${GOTIFY_DEFAULTUSER_NAME}" },
          { key: "GOTIFY_DEFAULTUSER_PASS", value: "${GOTIFY_DEFAULTUSER_PASS}" },
        ],
        volumes: [{ hostPath: "${APP_DATA_DIR}/data", containerPath: "/app/data" }],
      },
    ],
    overrides: [
      {
        architecture: "arm64",
        services: [{ name: "gotify", image: "gotify/server-arm64:2.6.3" }],
      },
    ],
  };

  const output = convertComposeJsonToYaml(input);

  assert.equal(
    output,
    [
      "services:",
      "  gotify:",
      "    image: 'gotify/server:2.7.3'",
      "    volumes:",
      "      - '${APP_DATA_DIR}/data:/app/data'",
      "    environment:",
      "      - 'GOTIFY_DEFAULTUSER_NAME=${GOTIFY_DEFAULTUSER_NAME}'",
      "      - 'GOTIFY_DEFAULTUSER_PASS=${GOTIFY_DEFAULTUSER_PASS}'",
      "    x-runtipi:",
      "      internal_port: 80",
      "      is_main: true",
      "x-runtipi:",
      "  schema_version: 2",
      "  overrides:",
      "    - architecture: 'arm64'",
      "      services:",
      "        gotify:",
      "          image: 'gotify/server-arm64:2.6.3'",
      "",
    ].join("\n"),
  );
});

test("converts ports, labels, volumes, healthcheck, and x-runtipi fields", () => {
  const input = {
    schemaVersion: 2,
    services: [
      {
        name: "app",
        image: "ghcr.io/example/app:1.0.0",
        isMain: true,
        internalPort: 3000,
        addToMainNetwork: true,
        environment: [{ key: "TZ", value: "${TZ}" }],
        volumes: [{ hostPath: "${APP_DATA_DIR}/data", containerPath: "/data", readOnly: true }],
        addPorts: [{ hostPort: 8080, containerPort: 80, tcp: true, udp: true, interface: "127.0.0.1" }],
        extraLabels: { "traefik.enable": "true" },
      },
      {
        name: "db",
        image: "postgres:16",
        workingDir: "/var/lib/postgresql",
        healthCheck: {
          test: "pg_isready -U postgres",
          interval: "30s",
          timeout: "5s",
          retries: 5,
          startPeriod: "20s",
          startInterval: "2s",
        },
      },
    ],
  };

  const output = convertComposeJsonToYaml(input);

  assert.equal(
    output,
    [
      "services:",
      "  app:",
      "    image: 'ghcr.io/example/app:1.0.0'",
      "    ports:",
      "      - '127.0.0.1:8080:80'",
      "    volumes:",
      "      - '${APP_DATA_DIR}/data:/data:ro'",
      "    environment:",
      "      - 'TZ=${TZ}'",
      "    labels:",
      "      'traefik.enable': 'true'",
      "    x-runtipi:",
      "      internal_port: 3000",
      "      add_to_main_network: true",
      "      is_main: true",
      "  db:",
      "    image: 'postgres:16'",
      "    working_dir: '/var/lib/postgresql'",
      "    healthcheck:",
      "      test: 'pg_isready -U postgres'",
      "      interval: '30s'",
      "      timeout: '5s'",
      "      retries: 5",
      "      start_period: '20s'",
      "      start_interval: '2s'",
      "x-runtipi:",
      "  schema_version: 2",
      "",
    ].join("\n"),
  );
});

test("omits undefined nested values from converted output", () => {
  const input = {
    schemaVersion: 2,
    services: [
      {
        name: "db",
        image: "postgres:16",
        healthCheck: {
          test: "pg_isready -U postgres",
          interval: "30s",
        },
      },
    ],
  };

  const output = convertComposeJsonToYaml(input);

  assert.equal(
    output,
    [
      "services:",
      "  db:",
      "    image: 'postgres:16'",
      "    healthcheck:",
      "      test: 'pg_isready -U postgres'",
      "      interval: '30s'",
      "x-runtipi:",
      "  schema_version: 2",
      "",
    ].join("\n"),
  );
});

test("respects dry-run, force, and delete_json behavior", async () => {
  const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "native-docker-codemod-"));
  const appDir = path.join(tempRoot, "apps", "demo");

  await fs.mkdir(appDir, { recursive: true });
  await fs.writeFile(
    path.join(appDir, "docker-compose.json"),
    JSON.stringify(
      {
        schemaVersion: 2,
        services: [{ name: "demo", image: "demo:1.0.0", isMain: true, internalPort: 3000 }],
      },
      null,
      2,
    ),
    "utf8",
  );
  await fs.writeFile(path.join(appDir, "docker-compose.yml"), "legacy\n", "utf8");

  const dryRunResults = await runConversion({ root: tempRoot, appsDir: "apps", app: "demo", write: false, force: false, deleteJson: false });
  assert.equal(dryRunResults[0].action, "would_overwrite");
  assert.equal(await fs.readFile(path.join(appDir, "docker-compose.yml"), "utf8"), "legacy\n");

  const skippedResults = await runConversion({ root: tempRoot, appsDir: "apps", app: "demo", write: true, force: false, deleteJson: false });
  assert.equal(skippedResults[0].action, "skipped_existing");
  assert.equal(await fs.readFile(path.join(appDir, "docker-compose.yml"), "utf8"), "legacy\n");

  const writtenResults = await runConversion({ root: tempRoot, appsDir: "apps", app: "demo", write: true, force: true, deleteJson: true });
  assert.equal(writtenResults[0].action, "overwritten");
  assert.match(await fs.readFile(path.join(appDir, "docker-compose.yml"), "utf8"), /x-runtipi:/);
  await assert.rejects(fs.access(path.join(appDir, "docker-compose.json")));
});

test("reports schema validation errors before writing invalid output", async () => {
  const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "native-docker-codemod-invalid-"));
  const appDir = path.join(tempRoot, "apps", "broken");

  await fs.mkdir(appDir, { recursive: true });
  await fs.writeFile(
    path.join(appDir, "docker-compose.json"),
    JSON.stringify(
      {
        schemaVersion: 2,
        services: [{ name: "broken" }],
      },
      null,
      2,
    ),
    "utf8",
  );

  await assert.rejects(
    runConversion({ root: tempRoot, appsDir: "apps", app: "broken", write: true, force: true, deleteJson: false }),
    /services\[0\]\.image must be a string \(was missing\)/,
  );

  await assert.rejects(fs.access(path.join(appDir, "docker-compose.yml")));
});

test("validates converted documents against the expected top-level schema", () => {
  const errors = validateComposeYamlDocument({
    services: {
      demo: {
        image: "demo:1.0.0",
      },
    },
    "x-runtipi": {
      schema_version: 3,
    },
  });

  assert.deepEqual(errors, ["x-runtipi.schema_version: must be 1 or 2"]);
});
