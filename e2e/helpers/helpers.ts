import { chromium } from "@playwright/test";
import { signUpUser } from "../fixtures/fixtures";

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await signUpUser(page);
}

export default globalSetup;
