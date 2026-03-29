const BasePage = require('./base.page')

class MenuPage extends BasePage {

  get menuTab()         {return $('//android.widget.TextView[@text="Menu"]'); }
  get homeItem()        {return $('//android.widget.TextView[@text="Home"]')}
  get webviewItem()     {return $('//android.widget.TextView[@text="Webview"]')}
  get loginItem()       {return $('//android.widget.TextView[@text="Login"]')}
  get formsItem()       {return $('//android.widget.TextView[@text="Forms"]')}
  get swipeItem()       {return $('//android.widget.TextView[@text="Swipe"]')}
  get dragItem()        {return $('//android.widget.TextView[@text="Drag"]')}
  get permissionsItem() {return $('//android.widget.TextView[@text="Permissions"]')}
  get dataItem()        {return $('//android.widget.TextView[@text="Data"]')}

  async navigateTo() {
    await this.click(await this.menuTab)
    await driver.pause(3000)
  }
}

module.exports = new MenuPage();