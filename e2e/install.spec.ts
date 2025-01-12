import { expect, test } from "@playwright/test";
import { loginUser } from "./fixtures/fixtures";

test("app should install", async ({ page }) => {
  // Set timeout
  test.setTimeout(70000);

  // Sign in
  await loginUser(page);

  // Get app from env and go to the app page
  await page.goto(`http://127.0.0.1/apps/${process.env.APP_NAME || ""}`);

  // Click install button
  await page.getByRole("button", { name: "Install" }).click();

  // Click install button in modal
  await page.getByRole("button", { name: "Install" }).click();

  // App should install
  await expect(page.getByText("Running")).toBeVisible({ timeout: 65000 });
});

test("app should...work", async ({ page }) => {
  // Sign in
  await loginUser(page);

  // Get app from env and go to the app page
  await page.goto(`http://127.0.0.1/apps/${process.env.APP_NAME || ""}`);

  // Click open button
  await page.getByRole("button", { name: "Open" }).click();

  // Open the app
  await page.getByRole("menuitem", { name: /127.0.0.1/i }).click();

  // Wait for page redirect
  expect(page.title()).not.toBe(new RegExp(`/${process.env.APP_NAME}/i`));

  // Take screenshot
  await page.screenshot({ fullPage: true });
});
