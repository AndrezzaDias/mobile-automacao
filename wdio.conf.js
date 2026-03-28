const { config: baseConfig } = require('./wdio.base.conf');

exports.config = {
  ...baseConfig,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    'appium:app': `${__dirname}/apk/android.wdio.native.app.v2.2.0.apk`,
    'appium:appWaitActivity': 'com.wdiodemoapp.*',
  }],
};