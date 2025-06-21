export default {
  allowedCommands: ["bun ./scripts/update-config.ts", "bunx @biomejs/biome@2.0.0 check --write", "bun install && bun run test"],
  hostRules: [
    {
      hostType: "docker",
      matchHost: "index.docker.io",
      username: process.env.DOCKERHUB_USERNAME,
      password: process.env.DOCKERHUB_TOKEN,
    },
    {
      hostType: "docker",
      matchHost: "hub.docker.com",
      username: process.env.DOCKERHUB_USERNAME,
      password: process.env.DOCKERHUB_TOKEN,
    },
    {
      matchHost: "docker.io",
      concurrentRequestLimit: 2,
    },
  ],
};
