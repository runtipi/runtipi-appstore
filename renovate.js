module.exports = {
  extends: ["config:base"],
  onboarding: false,
  requireConfig: false,
  rebaseWhen: "conflicted",
  gitIgnoredAuthors: ["githubaction@githubaction.com"],
  dependencyDashboard: true,
  enabledManagers: ["docker-compose", "dockerfile"],
  hostRules: [
    {
      matchHost: "index.docker.io",
      hostType: "docker",
      username: process.env.DOCKERHUB_USERNAME,
      password: process.env.DOCKERHUB_TOKEN,
    },
    {
      matchHost: "docker.io",
      concurrentRequestLimit: 2,
    },
  ],
  packageRules: [
    {
      managers: ["docker-compose", "dockerfile"],
      packagePatterns: [
        "^([^\\/]+\\/)?(mysql|mariadb|mongodb|mongo|postgres|redis)(:|$)",
      ],
      enabled: false,
    },
  ],
};
