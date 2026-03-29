const { expect }  = require('chai')
const LoginPage   = require('../pageobjects/login.page')
const SignUpPage  = require('../pageobjects/signup.page')
const DragPage    = require('../pageobjects/drag.page')
const FormsPage   = require('../pageobjects/forms.page')
const HomePage    = require('../pageobjects/home.page')
const WebPage     = require('../pageobjects/web.page')
const SwipePage   = require('../pageobjects/swipe.page')
const MenuPage    = require('../pageobjects/menu.page')
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
    await LoginPage.navigateTo()
    await LoginPage.goToSignUp()
    // Preenche o formulário com dados válidos do JSON
    await SignUpPage.fillForm(
      users.newUser.email,
      users.newUser.password,
      users.newUser.confirmPassword
    )
    const message = await SignUpPage.validateMessagePopup();
    expect(message).to.not.be.empty
  })

  users.invalidUsers.forEach((user) => {
    it(`${user.ct} - Erro ao cadastrar com ${user.descricao}`, async () => {
      await LoginPage.navigateTo()
      await LoginPage.goToSignUp()
      await SignUpPage.fillForm(
        user.email,
        user.password,
        user.confirmPassword
      )
      const errorText = await SignUpPage.getErrorMessage(user.errorXpath)
      expect(errorText).to.equal(user.errorMessage)
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
  await driver.hideKeyboard().catch(() => {})
  await driver.pressKeyCode(4).catch(() => {}) // BACK fecha teclado se ainda aberto
  await driver.pause(1500)
})

  it('CT07 - Drag and Drop de todas as peças para os destinos corretos', async () => {
  await DragPage.navigateTo()
  await DragPage.dragAndDropAll()
  const retryButton = await DragPage.retryButton
  await retryButton.waitForDisplayed({ timeout: 30000 })
  
  })
 
 it('CT08 - Preencher e validar formulário de Forms', async () => {
  const { formData } = users
  await FormsPage.navigateTo()
  expect(await FormsPage.pageTitle.isDisplayed()).to.be.true
  await FormsPage.setValue(await FormsPage.inputField, formData.inputText)
  const resultText = await FormsPage.inputResult.getText()
  expect(resultText).to.equal(formData.expectedResult)
  await FormsPage.dismissKeyboard()
  await FormsPage.click(await FormsPage.switchToggle)
  expect(await FormsPage.switchText.getText()).to.equal(formData.expectedSwitchText)
  await FormsPage.click(await FormsPage.dropdownChevron)
  await FormsPage.click(await FormsPage.dropdownOption)
  await FormsPage.click(await FormsPage.activeButton)
  await FormsPage.alertTitle.waitForDisplayed({ timeout: 30000 })
  expect(await FormsPage.alertTitle.getText()).to.equal(formData.expectedAlertTitle)
  await FormsPage.click(await FormsPage.alertOkButton)
  await FormsPage.click(await FormsPage.inactiveButton)
  const alertVisible = await FormsPage.alertTitle.isDisplayed().catch(() => false)
  expect(alertVisible).to.be.false
})
  it('CT09 - Validar tela Home', async () => {
    await HomePage.navigateTo()
    expect(await HomePage.homeTab.isDisplayed()).to.be.true
    expect(await HomePage.homeTitle.isDisplayed()).to.be.true
  })

  it('CT10 - Navegar na tela Web e rolar até o final', async () => {
    await WebPage.navigateTo();
    expect(await WebPage.webTab.isDisplayed()).to.be.true
    await WebPage.scrollToBottom(users.webScrolls)
    expect(true).to.be.true
  })

  it('CT11 - Swipe lateral e validar cards na tela', async () => {
    await SwipePage.navigateTo()
    expect(await SwipePage.pageTitle.isDisplayed()).to.be.true
    expect(await SwipePage.card1.isDisplayed()).to.be.true
    await SwipePage.swipeAndValidate(users.swipeSteps)
    expect(await SwipePage.card2.isDisplayed()).to.be.true
  })

  it('CT12 - Validar todos os itens do Menu', async () => {
    await MenuPage.navigateTo()
    expect(await MenuPage.homeItem.isDisplayed()).to.be.true
    expect(await MenuPage.webviewItem.isDisplayed()).to.be.true
    expect(await MenuPage.loginItem.isDisplayed()).to.be.true
    expect(await MenuPage.formsItem.isDisplayed()).to.be.true
    expect(await MenuPage.swipeItem.isDisplayed()).to.be.true
    expect(await MenuPage.dragItem.isDisplayed()).to.be.true
    expect(await MenuPage.permissionsItem.isDisplayed()).to.be.true
    expect(await MenuPage.dataItem.isDisplayed()).to.be.true
  })














 
})