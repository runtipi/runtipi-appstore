module.exports = {
  allowedCommands: ["bun ./scripts/update-config.ts", "bunx @biomejs/biome check --write", "bun install && bun run test"],
  secrets: {
    DOCKERHUB_USERNAME: process.env.DOCKERHUB_USERNAME,
    DOCKERHUB_TOKEN: process.env.DOCKERHUB_TOKEN,
  },
};
