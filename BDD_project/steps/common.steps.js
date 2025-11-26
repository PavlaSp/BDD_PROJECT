import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, Then } = createBdd();

Given('uživatel otevře aplikaci', async ({ page }) => {
  await page.goto('http://localhost:3000');
});

Then('vidí zprávu {string}', async ({ page }, arg) => {
  // Hledat text na stránce bez ohledu na ikonu
  const elements = await page.locator('*').all();
  let found = false;
  for (const el of elements) {
    const text = await el.textContent();
    if (text && text.includes(arg)) {
      found = true;
      break;
    }
  }
  // Zkusit najít text v alert dialogu
  if (!found) {
    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain(arg);
      await dialog.dismiss();
      found = true;
    });
    await page.waitForTimeout(2000);
    if (!found) {
      throw new Error(`Zpráva '${arg}' nebyla nalezena ani na stránce, ani v dialogu.`);
    }
  }
});

Then('vidí své odpovědi', async ({ page }) => {
  const radios = page.locator('input[type="radio"]');
  await expect(radios.first()).toBeDisabled();
});

Then('vidí komentář schvalovatele', async ({ page }) => {
  await expect(page.locator('textarea')).toBeDisabled();
});
