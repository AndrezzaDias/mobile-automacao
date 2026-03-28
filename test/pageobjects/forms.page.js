const BasePage = require('./base.page');
const { expect }  = require('chai')

class FormsPage extends BasePage {
  get pageTitle()       { return $('//android.widget.TextView[@text="Form components"]') }
  get inputField()      { return $('//android.widget.EditText[@content-desc="text-input"]') }
  get inputTextResult() { return $('//android.widget.TextView[@content-desc="input-text-result"]') }
  get switchToggle()    { return $('//android.widget.Switch[@content-desc="switch"]') }
  get switchText()      { return $('//android.widget.TextView[@content-desc="switch-text"]') }
  get dropdownChevron() { return $('//android.widget.TextView[@resource-id="dropdown-chevron"]') }
  get dropdownOption()  { return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]') }
  get activeButton()    { return $('//android.view.ViewGroup[@content-desc="button-Active"]') }
  get inactiveButton()  { return $('//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup') }
  get alertTitle()      { return $('//android.widget.TextView[@resource-id="com.wdiodemoapp:id/alert_title"]') }
  get popupOkButton()   { return $('//android.widget.Button[@resource-id="android:id/button1"]') }

  async navigateTo() {
    await $('//android.widget.Button[@content-desc="Forms"]').click()
    await this.pageTitle.waitForDisplayed({ timeout: 5000 })
  }

  async fillAndSubmit(value) {

    await this.inputField.waitForDisplayed({ timeout: 5000 })
    await this.inputField.click()
    await this.inputField.setValue(value)

    await this.inputTextResult.waitForDisplayed({ timeout: 5000 })
    const inputResult = await this.inputTextResult.getText()
    expect(inputResult).to.equal(value)

    await this.switchToggle.waitForDisplayed({ timeout: 5000 })
    await this.switchToggle.click()
    await this.switchText.waitForDisplayed({ timeout: 5000 })
    const switchLabel = await this.switchText.getText()
    expect(switchLabel).to.equal('Click to turn the switch OFF')
    await this.dropdownChevron.waitForDisplayed({ timeout: 5000 })
    await this.dropdownChevron.click()
    await this.dropdownOption.waitForDisplayed({ timeout: 5000 })
    await this.dropdownOption.click()
    await this.activeButton.waitForDisplayed({ timeout: 5000 })
    await this.activeButton.click()
  }

  async validateMessagePopup() {
    await this.alertTitle.waitForDisplayed({ timeout: 5000 })
    const title = await this.alertTitle.getText()
    expect(title).to.equal('This button is active')

    await this.popupOkButton.waitForDisplayed({ timeout: 5000 })
    await this.popupOkButton.click()
    await this.inactiveButton.waitForDisplayed({ timeout: 5000 })
    await this.inactiveButton.click()
    const alertVisible = await this.alertTitle.isDisplayed().catch(() => false)
    expect(alertVisible).to.be.false

    return title
  }
}
module.exports = new FormsPage();