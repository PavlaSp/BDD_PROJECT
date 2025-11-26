import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('schvalovatel otevře aplikaci', async ({ page }) => {
	await page.goto('http://localhost:3000');
	// Uživatel vyplní dotazník
	await page.check('input[name="question-1"][value="Odpověď 1"]');
	await page.check('input[name="question-2"][value="Odpověď 2"]');
	await page.fill('textarea', 'Testovací komentář');
	await page.click('button[type="submit"]');
	// Přepnout na schvalovatele
	await page.click('button:has-text("Přepnout na schvalovatele")');
});

Then('vidí odpovědi uživatele', async ({ page }) => {
	await expect(page.locator('form')).toBeVisible();
});

When('schvalovatel přidá komentář {string}', async ({ page }, comment) => {
	await page.fill('textarea', comment);
});

When('schvalovatel schválí dotazník', async ({ page }) => {
	await page.click('button:has-text("Schválit")');
});

// Kroky přesunuty do common.steps.js
