const BasePage = require('./base.page')

class LoginPage extends BasePage {
  get loginTab()    {return $('//android.widget.TextView[@text="Login"]')}
  get emailField()    {return $('//android.widget.EditText[@content-desc="input-email"]')}
  get passwordField() {return $('//android.widget.EditText[@content-desc="input-password"]')}
  get loginButton()   {return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]')}
  get signUpLink()    {return $('//android.widget.TextView[@text="Sign up"]') }

  async navigateTo() {
    await this.click(await this.loginTab)
  }
  async login(email, password) {
    await this.setValue(await this.emailField, email)
    await this.setValue(await this.passwordField, password)
    await this.hideKeyboard() 
    await driver.pause(500)
    await this.click(await this.loginButton)
    await driver.pause(2500)
  }
  async goToSignUp() {
    await this.click(await this.signUpLink)
  }
}
module.exports = new LoginPage()