module.exports = {
  allowedCommands: ["bun ./scripts/update-config.ts", "bunx @biomejs/biome check --write", "bun install && bun run test"],
  hostRules: [
    {
      hostType: "docker",
      username: process.env.DOCKERHUB_USERNAME,
      password: process.env.DOCKERHUB_TOKEN,
    },
  ],
};
