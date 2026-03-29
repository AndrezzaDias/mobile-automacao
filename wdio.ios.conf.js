const { config: baseConfig } = require('./wdio.base.conf');

exports.config = {
  ...baseConfig,
  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14',
    'appium:platformVersion': '16.0',
    'appium:automationName': 'XCUITest',
    'appium:app': `${__dirname}/apk/android.wdio.native.app.v2.2.0.apk`,
    'appium:app': `${__dirname}/apk/ios.simulator.wdio.native.app.v3.0.0.app.zip`, 
};