const { expect }  = require('chai')
const LoginPage   = require('../pageobjects/login.page')
const SignUpPage  = require('../pageobjects/signup.page')
const DragPage    = require('../pageobjects/drag.page')
const users       = require('../data/users.json')

describe('Testes do App WDIO Demo', () => {

  before(async () => {
    await driver.pause(3000);
  })
  it('CT01 - Navegar para a tela de Login', async () => {
    await LoginPage.navigateTo()
    expect(await LoginPage.signUpLink.isDisplayed()).to.be.true
  })

  it('CT02 - Realizar cadastro com sucesso', async () => {
    await LoginPage.navigateTo();
    await LoginPage.goToSignUp();
    // Preenche o formulário com dados válidos do JSON
    await SignUpPage.fillForm(
      users.newUser.email,
      users.newUser.password,
      users.newUser.confirmPassword
    )
    const message = await SignUpPage.validateMessagePopup();
    expect(message).to.not.be.empty;
  })

  users.invalidUsers.forEach((user) => {
    it(`${user.ct} - Erro ao cadastrar com ${user.descricao}`, async () => {
      await LoginPage.navigateTo();
      await LoginPage.goToSignUp();
      await SignUpPage.fillForm(
        user.email,
        user.password,
        user.confirmPassword
      )
      const errorText = await SignUpPage.getErrorMessage(user.errorXpath);
      expect(errorText).to.equal(user.errorMessage);
    })
  })
  it('CT06 - Login com sucesso', async () => {
    await LoginPage.navigateTo()
    await LoginPage.login(
      users.validUser.email,
      users.validUser.password
    )
    const title = await LoginPage.validateSuccessPopup()
    expect(title).to.equal('Success')
  })
  it.only('CT07 - Drag and Drop de peça para o destino', async () => {
  
    await DragPage.navigateTo();

    await DragPage.dragAndDrop();

    const target = await DragPage.dropTarget
    expect(await target.isDisplayed()).to.be.true
  })

})