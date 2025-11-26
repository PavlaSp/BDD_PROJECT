import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: './features/**/*.feature',
  steps: ['./steps/**/*.js'],
});

export default defineConfig({
  testDir,
  reporter: 'html',
  webServer: {
    command: 'npm run start',           // start skript v package.json
    url: 'http://localhost:3000',       // kam testy cílí
    timeout: 120_000,
    reuseExistingServer: true           // pokud už server běží, Playwright ho znovu nepustí
  }
});