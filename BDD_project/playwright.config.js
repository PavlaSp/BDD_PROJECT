import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: './features/**/*.feature',
  steps: ['./steps/**/*.js'],
});

export default defineConfig({
  testDir,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }],
    ['github']
  ],
  use: {
    trace: 'on',
   },
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    timeout: 120000,
    reuseExistingServer: true           // pokud už server běží, Playwright ho znovu nepustí
  }
});