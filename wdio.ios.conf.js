require('dotenv').config()
const { config: baseConfig } = require('./wdio.base.conf')

exports.config = {
  ...baseConfig,

  services: [
    ['appium', {
      command: 'appium',
      logFileName: 'appium.log',
    }],
  ],

  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName':      'iPhone 14',
    'appium:platformVersion': '16.0',
    'appium:automationName':  'XCUITest',
    'appium:app': `${process.cwd()}/apk/ios.simulator.wdio.native.app.v3.0.0.app.zip`,
    'appium:appWaitActivity': '*',
    'appium:noReset': false,
  }],
}