import { defineConfig, devices } from '@playwright/test';

// playwright.config.js


//import reporter from '@shelex/cucumberjs-allure-reporter';

// reporter.config({
//   useCucumberStepReporter: true,
// });

export default defineConfig({
    default: `--require-module @babel/register --require ./features/step_definitions/**/*.js --format @testomatio/reporter`,
    testDir: './tests',
    timeout: 30000,
    expect: {
        timeout: 10000
    },
    fullyParallel: true,
    retries: 2,
    
reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'results.xml' }]
  ],

   // reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox'] }
        },
        {
            name: 'WebKit',
            use: { ...devices['Desktop Safari'] }
        }
    ]
});