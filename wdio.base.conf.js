require('dotenv').config();

exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },
  afterTest: async function (test, context, { error }) {
    if (error) {
      const fs = require('fs');
      const screenshot = await browser.takeScreenshot();
      const dir = './test/screenshots';
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const name = test.title.replace(/\s+/g, '_') + '_' + Date.now() + '.png';
      fs.writeFileSync(`${dir}/${name}`, screenshot, 'base64');
    }
  },
};