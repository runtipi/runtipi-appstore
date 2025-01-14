import { type Page, expect } from "@playwright/test";

export const signUpUser = async (page: Page) => {
  // Skip insecure config thing
  await page.addLocatorHandler(page.getByText("Insecure configuration"), async () => {
    await page.getByRole("button", { name: "Close" }).click();
  });

  // Go to register page
  await page.goto("http://127.0.0.1/register");

  // Sign up
  await page.getByPlaceholder("you@example.com").click();
  await page.getByPlaceholder("you@example.com").fill("tester@test.com");

  await page.getByPlaceholder("Enter your password", { exact: true }).fill("password");
  await page.getByPlaceholder("Confirm your password").fill("password");

  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByRole("heading", { name: "Thanks for using Runtipi" })).toBeVisible();
  await page.getByRole("button", { name: "Save and enter" }).click();
};

export const loginUser = async (page: Page) => {
  // Skip insecure config thing
  await page.addLocatorHandler(page.getByText("Insecure configuration"), async () => {
    await page.getByRole("button", { name: "Close" }).click();
  });

  // Login user
  await page.goto("http://127.0.0.1/login");

  await page.getByPlaceholder("you@example.com").fill("tester@test.com");
  await page.getByPlaceholder("Your password").fill("password");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
};
