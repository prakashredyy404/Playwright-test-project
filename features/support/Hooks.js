import { setDefaultTimeout,Before, After, BeforeStep, AfterStep, Status } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from 'playwright';
import POMManager from '../../pageobjects/POMmanager.js';
setDefaultTimeout(60 * 1000);
//import { takescreenshot } from 'playwright';
//import reporter from '@shelex/cucumberjs-allure-reporter';

// Runs before each scenario
Before(async function () {
    const browserType = process.env.browser || 'chromium';
    const browser = {
        chromium,
        firefox,
        webkit
    }[browserType];
    this.browser = await browser.launch({ headless: false });
    this.context = await this.browser.newContext({
    //   recordVideo: {
    //     dir: 'videos/', // directory to save videos
    //     size: { width: 1280, height: 720 }
    //   }
    });
    this.page = await this.context.newPage();
   //await this.context.tracing.start({ screenshots: true, snapshots: true });

    this.pom = new POMManager(this.page);

});
After(async function () {
    
await this.page.close();
    await this.context.close();
    await this.browser.close();
   // await this.context.tracing.stop({ path: `trace-${Date.now()}.zip`});

     console.log('Closing the browser');
});


BeforeStep(async function ({ pickleStep }) {
    const stepText = pickleStep.text;
    const randomNumber = Math.floor(Math.random() * 10);
  //  await this.page.screenshot({ path: `${Date.now()}_image.png` });
    });
AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'image1.png' });
    }
});