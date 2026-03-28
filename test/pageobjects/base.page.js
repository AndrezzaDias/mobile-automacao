class BasePage {
  async waitForDisplayed(element, timeout = 8000) {
    await element.waitForDisplayed({ timeout })
  }
  async click(element) {
    await this.waitForDisplayed(element)
    await element.click()
  }

  async setValue(element, value) {
    await this.waitForDisplayed(element)
    await element.click()
    await element.setValue(value)
  }
  async validateSuccessPopup() {
    const popupTitle = await $('//android.widget.TextView[@resource-id="com.wdiodemoapp:id/alert_title"]')
    await this.waitForDisplayed(popupTitle)
    const title = await popupTitle.getText()
    await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
    return title;
  }
  async validateMessagePopup() {
    const popupMessage = await $('//android.widget.TextView[@resource-id="android:id/message"]')
    await this.waitForDisplayed(popupMessage)
    const message = await popupMessage.getText()
    await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
    return message
  }
}
module.exports = BasePage