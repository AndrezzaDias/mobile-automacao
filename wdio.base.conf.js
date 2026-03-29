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
      addConsoleLogs: true,
    }],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },

  // ↓ Adiciona AQUI — após mochaOpts
  onPrepare: function (config, capabilities) {
    const fs = require('fs');
    const dir = './allure-results';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(`${dir}/environment.properties`,
      `Platform=${capabilities[0]?.platformName || 'Android'}\n` +
      `Device=${capabilities[0]?.['appium:deviceName'] || 'emulator'}\n` +
      `App=android.wdio.native.app.v2.2.0.apk\n` +
      `Framework=WebdriverIO\n` +
      `Language=JavaScript\n` +
      `Reporter=Allure\n`
    );
  },

  // ↓ Substitui o afterTest atual por este
  afterTest: async function (test, context, { error, passed }) {
    if (!passed) {
      const fs = require('fs');
      const screenshot = await browser.takeScreenshot();
      const dir = './test/screenshots';
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const name = test.title.replace(/\s+/g, '_') + '_' + Date.now() + '.png';
      fs.writeFileSync(`${dir}/${name}`, screenshot, 'base64');
      // Adiciona screenshot no relatório Allure
      await browser.takeScreenshot();
    }
  },
}