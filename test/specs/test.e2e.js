describe('Testes do App WDIO Demo', () => {

  it('CT01 - Clicar na aba Login', async () => {
    await driver.pause(3000)

    const loginTab = await $('//android.widget.TextView[@text="Login"]');
    await loginTab.waitForDisplayed({ timeout: 15000 })
    await loginTab.click();

    await driver.pause(2000)

    const signUpButton = await $('//android.widget.TextView[@text="Sign up"]')
    await signUpButton.waitForDisplayed({ timeout: 15000 })
    expect(await signUpButton.isDisplayed()).toBe(true)
  })

  it('CT02 - Realizar cadastro com sucesso', async () => {
    const signUpButton = await $('//android.widget.TextView[@text="Sign up"]')
    await signUpButton.waitForDisplayed({ timeout: 15000 })
    await signUpButton.click()

    await driver.pause(2000)

    const emailField = await $('//android.widget.EditText[@content-desc="input-email"]')
    await emailField.waitForDisplayed({ timeout: 15000 })
    await emailField.click()
    await emailField.setValue('teste@carrefour.com')

    await driver.pause(1000)

    const passwordField = await $('//android.widget.EditText[@content-desc="input-password"]')
    await passwordField.click()
    await passwordField.setValue('Test@1234')

    await driver.pause(1000)

    const confirmPasswordField = await $('//android.widget.EditText[@content-desc="input-repeat-password"]');
    await confirmPasswordField.click()
    await confirmPasswordField.setValue('Test@1234')

    await driver.pause(1000)

    const signUpBtn = await $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]')
    await signUpBtn.waitForDisplayed({ timeout: 15000 })
    await signUpBtn.click()

    await driver.pause(3000)

    const popupMessage = await $('//android.widget.TextView[@resource-id="android:id/message"]')
    await popupMessage.waitForDisplayed({ timeout: 15000 })
    expect(await popupMessage.isDisplayed()).toBe(true)

    const messageText = await popupMessage.getText()
    console.log('Mensagem do popup:', messageText)

    
    const okButton = await $('//android.widget.Button[@resource-id="android:id/button1"]')
    await okButton.waitForDisplayed({ timeout: 15000 })
    await okButton.click()

    await driver.pause(2000)
  })

  it('CT03 - Erro ao cadastrar com senha menor que 8 caracteres', async () => {
    // Navega para Sign up
    const loginTab = await $('//android.widget.TextView[@text="Login"]');
    await loginTab.waitForDisplayed({ timeout: 15000 });
    await loginTab.click();

    await driver.pause(2000)

    const signUpButton = await $('//android.widget.TextView[@text="Sign up"]')
    await signUpButton.click()

    await driver.pause(2000)


    const emailField = await $('//android.widget.EditText[@content-desc="input-email"]');
    await emailField.waitForDisplayed({ timeout: 15000 })
    await emailField.click();
    await emailField.setValue('teste2@carrefour.com')

    await driver.pause(1000)

    const passwordField = await $('//android.widget.EditText[@content-desc="input-password"]')
    await passwordField.click();
    await passwordField.setValue('123')

    await driver.pause(1000)

    const confirmPasswordField = await $('//android.widget.EditText[@content-desc="input-repeat-password"]')
    await confirmPasswordField.click()
    await confirmPasswordField.setValue('123')

    await driver.pause(1000)

    const signUpBtn = await $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]');
    await signUpBtn.click()

    await driver.pause(2000)

    const errorMsg = await $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    await errorMsg.waitForDisplayed({ timeout: 15000 })
    expect(await errorMsg.isDisplayed()).toBe(true)

    console.log('Erro de senha curta exibido com sucesso!')
  })

  it('TC04 - Erro ao cadastrar com senhas diferentes', async () => {
    // Navega para Sign up
    const loginTab = await $('//android.widget.TextView[@text="Login"]')
    await loginTab.waitForDisplayed({ timeout: 15000 })
    await loginTab.click()

    await driver.pause(2000)

    const signUpButton = await $('//android.widget.TextView[@text="Sign up"]');
    await signUpButton.click()

    await driver.pause(2000)


    const emailField = await $('//android.widget.EditText[@content-desc="input-email"]');
    await emailField.waitForDisplayed({ timeout: 15000 })
    await emailField.click();
    await emailField.setValue('teste3@carrefour.com')

    await driver.pause(1000)

    const passwordField = await $('//android.widget.EditText[@content-desc="input-password"]')
    await passwordField.click()
    await passwordField.setValue('Test@1234')

    await driver.pause(1000)

    const confirmPasswordField = await $('//android.widget.EditText[@content-desc="input-repeat-password"]')
    await confirmPasswordField.click()
    await confirmPasswordField.setValue('Test@9999')

    await driver.pause(1000)

    const signUpBtn = await $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]')
    await signUpBtn.click()

    await driver.pause(2000)

    const errorMsg = await $('//android.widget.TextView[@text="Please enter the same password"]')
    await errorMsg.waitForDisplayed({ timeout: 15000 })
    expect(await errorMsg.isDisplayed()).toBe(true)

    console.log('Erro de senhas diferentes exibido com sucesso!')
  })

  it('CT05 - Erro ao cadastrar com email inválido', async () => {
    // Navega para Sign up
    const loginTab = await $('//android.widget.TextView[@text="Login"]');
    await loginTab.waitForDisplayed({ timeout: 15000 });
    await loginTab.click()

    await driver.pause(2000)

    const signUpButton = await $('//android.widget.TextView[@text="Sign up"]');
    await signUpButton.click();

    await driver.pause(2000);

    // Preenche email inválido
    const emailField = await $('//android.widget.EditText[@content-desc="input-email"]')
    await emailField.waitForDisplayed({ timeout: 15000 })
    await emailField.click()
    await emailField.setValue('emailinvalido')

    await driver.pause(1000)

    const passwordField = await $('//android.widget.EditText[@content-desc="input-password"]')
    await passwordField.click()
    await passwordField.setValue('Test@1234')

    await driver.pause(1000)

    const confirmPasswordField = await $('//android.widget.EditText[@content-desc="input-repeat-password"]')
    await confirmPasswordField.click()
    await confirmPasswordField.setValue('Test@1234')

    await driver.pause(1000)

    const signUpBtn = await $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]')
    await signUpBtn.click()

    await driver.pause(2000)

   
    const errorMsg = await $('//android.widget.TextView[@text="Please enter a valid email address"]')
    await errorMsg.waitForDisplayed({ timeout: 15000 })
    expect(await errorMsg.isDisplayed()).toBe(true)

    console.log('Erro de email inválido exibido com sucesso!')
  })

})