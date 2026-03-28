require('dotenv').config();

exports.config = {
  ...require('./wdio.base.conf').config,

  services: [
    ['appium', {
      command: 'appium',
      logFileName: 'appium.log',
    }],
  ],

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '16.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': `${process.cwd()}/apk/android.wdio.native.app.v2.2.0.apk`,
    'appium:appWaitActivity': '*',
    'appium:noReset': false,
  }],
};