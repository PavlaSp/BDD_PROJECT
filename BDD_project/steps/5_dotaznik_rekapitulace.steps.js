import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();


Given('uživatel přepne na rekapitulaci', async ({ page }) => {
	await page.goto('http://localhost:3000');
	// Uživatel vyplní dotazník
	await page.check('input[name="question-1"][value="Odpověď 1"]');
	await page.check('input[name="question-2"][value="Odpověď 2"]');
	await page.fill('textarea', 'Testovací komentář');
	await page.click('button[type="submit"]');
	// Přepnout na schvalovatele a schválit
	await page.click('button:has-text("Přepnout na schvalovatele")');
  await page.fill('textarea', 'Schváleno');
  await page.click('button:has-text("Schválit")');
  // Přepnout na uživatele
  await page.click('button:has-text("Přepnout na uživatele")');
});

Then('vidí stanovisko schvalovatele', async ({ page }) => {
	await expect(page.locator('text=Schváleno')).toBeVisible();
});

Then('nelze nic editovat', async ({ page }) => {
	// Ověřit, že všechny radio buttony jsou disabled
	const radios = await page.locator('input[type="radio"]');
	const count = await radios.count();
	for (let i = 0; i < count; i++) {
		await expect(radios.nth(i)).toBeDisabled();
	}
	// Ověřit, že textarea je disabled
	await expect(page.locator('textarea')).toBeDisabled();
});