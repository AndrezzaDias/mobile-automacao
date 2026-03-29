Feature: Testes do App WDIO Demo
  Como um usuário do aplicativo de demonstração
  Eu quero navegar pelas telas, realizar login, cadastro e interagir com os componentes
  Para garantir que as principais funcionalidades do app estão operando corretamente

  Scenario: CT01 - Navegar para a tela de Login
    Given que eu abro o aplicativo
    When eu navego para a tela de Login
    Then a aba de cadastro (Sign Up) deve estar visível

  Scenario: CT02 - Realizar cadastro com sucesso
    Given que eu navego para a tela de Login
    And acesso a aba de Cadastro
    When eu preencho o formulário de cadastro com um email e senha válidos
    Then uma mensagem de sucesso no cadastro deve ser exibida

  Scenario Outline: <CT> - Erro ao cadastrar com <descricao>
    Given que eu navego para a tela de Login
    And acesso a aba de Cadastro
    When eu preencho o formulário com o email "<email>", senha "<senha>" e confirmacao "<confirmacao_senha>"
    Then a mensagem de erro "<mensagem_erro>" deve ser exibida na tela

    Examples:
      | CT   | descricao                    | email                | senha     | confirmacao_senha | mensagem_erro                      |
      | CT03 | senha menor que 8 caracteres | teste2@carrefour.com | 123       | 123               | Please enter at least 8 characters |
      | CT04 | senhas diferentes            | teste3@carrefour.com | Test@1234 | Test@9999         | Please enter the same password     |
      | CT05 | email invalido               | emailinvalido        | Test@1234 | Test@1234         | Please enter a valid email address |

  Scenario: CT06 - Login com sucesso
    Given que eu navego para a tela de Login
    When eu realizo o login com credenciais válidas ("teste@carrefour.com" e "Test@1234")
    Then um popup com o título "Success" deve ser exibido

  Scenario: CT07 - Drag and Drop de todas as peças para os destinos corretos
    Given que eu navego para a tela de Drag
    When eu arrasto e solto todas as peças em seus respectivos destinos
    Then o botão de tentar novamente (Retry) deve ficar visível na tela

  Scenario: CT08 - Preencher e validar formulário de Forms
    Given que eu navego para a tela de Forms
    And a tela é carregada com sucesso
    When eu preencho o campo de texto com "Teste"
    And o resultado do texto refletido exibe "Teste"
    And eu clico no interruptor (Switch)
    And eu seleciono a opção "Appium is awesome" no menu suspenso (Dropdown)
    And eu clico no botão Ativo
    Then um alerta com o título "This button is" deve ser exibido
    When eu fecho o alerta e clico no botão Inativo
    Then nenhum alerta deve ser exibido na tela

  Scenario: CT09 - Validar tela Home
    When eu navego para a tela Home
    Then a aba Home e o título principal devem estar visíveis

  Scenario: CT10 - Navegar na tela Web e rolar até o final
    Given que eu navego para a aba Web
    When eu realizo rolagens sucessivas na tela (Scroll)
    Then eu devo alcançar o final da página web com sucesso

  Scenario: CT11 - Swipe lateral e validar cards na tela
    Given que eu navego para a tela de Swipe
    And o primeiro card está visível na tela
    When eu realizo o movimento de swipe lateral pelos cards
    Then o último card contendo o texto esperado deve se tornar visível

  Scenario: CT12 - Validar todos os itens do Menu
    Given que eu aciono o menu de navegação do aplicativo
    Then os seguintes itens devem estar visíveis:
      | Home        |
      | Webview     |
      | Login       |
      | Forms       |
      | Swipe       |
      | Drag        |
      | Permissions |
      | Data        |
