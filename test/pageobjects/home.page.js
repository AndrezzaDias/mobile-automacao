const BasePage = require('./base.page');

class HomePage extends BasePage {
  get homeTab()    {return $('//android.widget.TextView[@text="Home"]')}
  get homeTitle()  {return $('//android.widget.TextView[@text="WEBDRIVER"]')}

  async navigateTo() {
    await this.click(await this.homeTab)
    await driver.pause(1000)
  }
}
module.exports = new HomePage()