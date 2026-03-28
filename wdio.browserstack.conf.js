require('dotenv').config();
const { config: baseConfig } = require('./wdio.base.conf');

exports.config = {
  ...baseConfig,

  user: process.env.BROWSERSTACK_USER,
  key:  process.env.BROWSERSTACK_KEY,

  hostname: 'hub.browserstack.com',
  port: 443,
  protocol: 'https',
  path: '/wd/hub',

  services: [
    ['browserstack', {
      browserstackLocal: false,
      testObservability: true,
      testObservabilityOptions: {
        projectName: 'Banco Carrefour - Mobile',
        buildName: 'Build_' + new Date().toISOString().slice(0, 10),
      },
    }],
  ],

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName':      'Google Pixel 7',
    'appium:platformVersion': '13.0',
    'appium:automationName':  'UiAutomator2',
    'appium:app':              process.env.BROWSERSTACK_APP_URL,

    'bstack:options': {
      projectName:  'Banco Carrefour - Mobile',
      buildName:    'Build_' + new Date().toISOString().slice(0, 10),
      sessionName:  'Smoke Test - APK Open',
      debug:         true,
      networkLogs:   true,
      appiumVersion: '2.0.1',
    },
  }],
};