const BasePage = require('./base.page')

class SignUpPage extends BasePage {

  get emailField()           { return $('//android.widget.EditText[@content-desc="input-email"]') }
  get passwordField()        { return $('//android.widget.EditText[@content-desc="input-password"]') }
  get confirmPasswordField() { return $('//android.widget.EditText[@content-desc="input-repeat-password"]') }
  get signUpButton()         { return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]') }

  async fillForm(email, password, confirmPassword) {
  await this.setValue(await this.emailField, email)
  await this.setValue(await this.passwordField, password)
  await this.setValue(await this.confirmPasswordField, confirmPassword)
  await this.hideKeyboard() // ← só aqui, depois de tudo preenchido
  await driver.pause(500)
  await this.click(await this.signUpButton)
  await driver.pause(2000)
}

  async getErrorMessage(xpath) {
    const errorMsg = await $(xpath)
    await errorMsg.waitForDisplayed({ timeout: 8000 })
    return errorMsg.getText()
  }
}
module.exports = new SignUpPage()