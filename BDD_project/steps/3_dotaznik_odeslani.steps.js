import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

When('vybere {string} u otázky {int}', async ({ page }, answer, qId) => {
  await page.locator(`input[name="question-${qId}"][value="${answer}"]`).check();
});

When('vyplní komentář {string} u otázky 3', async ({ page }, comment) => {
  await page.fill('textarea', comment);
});

When('odešle dotazník', async ({ page }) => {

  await page.click('button[type="submit"]');
});
