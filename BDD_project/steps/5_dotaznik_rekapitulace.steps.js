import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();


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