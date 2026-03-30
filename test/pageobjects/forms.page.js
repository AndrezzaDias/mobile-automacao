const BasePage = require('./base.page')

class FormsPage extends BasePage {
  get pageTitle()       {return$('//android.widget.TextView[@text="Form components"]')}
  get inputField()      {return $('//android.widget.EditText[@content-desc="text-input"]')}
  get inputResult()     {return $('//android.widget.TextView[@content-desc="input-text-result"]')}
  get switchToggle()    {return $('//android.widget.Switch[@content-desc="switch"]') }
  get switchText()      {return $('//android.widget.TextView[@content-desc="switch-text"]')}
  get dropdownChevron() {return $('//android.widget.TextView[@resource-id="dropdown-chevron"]')}
  get dropdownOption()  {return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]')}
  get activeButton()    {return $('//android.view.ViewGroup[@content-desc="button-Active"]')}
  get alertTitle()      {return $('//android.widget.TextView[@resource-id="com.wdiodemoapp:id/alert_title"]')}
  get alertOkButton()   {return $('//android.widget.Button[@resource-id="android:id/button1"]')}
  get inactiveButton()  {return $('//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup')}
  get formsTab()        {return $('//android.widget.TextView[@text="Forms"]')}

  async navigateTo() {
    await this.click(await this.formsTab)
    await this.waitForDisplayed(await this.pageTitle)
  }
  
  async dismissKeyboard() {
    await driver.hideKeyboard()
    const title = await $('//android.widget.TextView[@text="Form components"]')
    if (await title.isDisplayed()) await title.click()
    await driver.pause(500)
  }
}

module.exports = new FormsPage()