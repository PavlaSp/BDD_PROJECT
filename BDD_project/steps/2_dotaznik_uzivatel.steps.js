import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, Then } = createBdd();


Then('vidí dotazník', async ({ page }) => {
  await expect(page.locator('form')).toBeVisible();
});

Then('role je {string}', async ({ page }, role) => {
  const select = page.locator('select');
  await expect(select).toHaveValue(role);
  await expect(page.locator('option[value="schvalovatel"]')).toBeDisabled();
});