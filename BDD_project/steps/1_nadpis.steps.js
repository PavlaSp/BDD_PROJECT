
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, Then } = createBdd();


Then('vidí text {string}', async ({ page }, text) => {
  await expect(page.locator(`text=${text}`)).toBeVisible();
});
