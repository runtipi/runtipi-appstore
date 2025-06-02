export default {
  allowedCommands: ["bun ./scripts/update-config.ts", "bunx @biomejs/biome check --write", "bun install && bun run test"],
  automerge: false,
  rebaseWhen: "conflicted",
  customManagers: [
    {
      customType: "regex",
      managerFilePatterns: ["^.*docker-compose\\.json$"],
      matchStrings: ['"image": "(?<depName>.*?):(?<currentValue>.*?)",'],
      datasourceTemplate: "docker",
    },
  ],
  packageRules: [
    {
      matchUpdateTypes: ["major"],
      addLabels: ["major"],
    },
    // {
    //   "matchUpdateTypes": ["minor"],
    //   "addLabels": ["minor", "automerge"]
    // },
    // {
    //   "matchUpdateTypes": ["patch"],
    //   "addLabels": ["patch", "automerge"]
    // },
    {
      matchPackageNames: ["mariadb", "mysql", "monogdb", "postgres", "redis", "immich", "immich{-,}**"],
      enabled: false,
    },
  ],
  postUpgradeTasks: {
    commands: ["bun ./scripts/update-config.ts {{packageFile}} {{newVersion}}", "bunx @biomejs/biome check --write", "bun install && bun run test"],
    fileFilters: ["**/*"],
    executionMode: "update",
  },
  hostRules: [
    {
      hostType: "docker",
      matchHost: "index.docker.io",
      username: process.env.DOCKERHUB_USERNAME,
      password: process.env.DOCKERHUB_TOKEN,
    },
    {
      matchHost: "docker.io",
      concurrentRequestLimit: 2,
    },
  ],
};
