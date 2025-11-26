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
    command: 'npm run start -- --port 3000',
    url: 'http://localhost:3000',
    timeout: 120000,
    reuseExistingServer: !process.env.CI
  }
});