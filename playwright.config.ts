import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Sign up to tipi before running
  globalSetup: require.resolve("./e2e/helpers/helpers"),
  // Run tests in files in parallel
  testDir: "./e2e",
  // Fail the build on CI if you accidentally left test.only in the source code.
  fullyParallel: false,
  // Retry on CI only
  forbidOnly: !!process.env.CI,
  // Opt out of parallel tests on CI.
  retries: process.env.CI ? 2 : 0,
  // Reporter to use. See https://playwright.dev/docs/test-reporter
  workers: process.env.CI ? 1 : undefined,
  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
  reporter: "html",
  use: {
    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    trace: "on-first-retry",
    // Enable video
    video: "on",
  },
  // No need for multiple browsers to just take a screenshot
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
