import LoginPage from "../fixtures/pages/loginPage"
import UserData from "../fixtures/pages/userData.js"
import DashboardPage from "../fixtures/pages/dashboardPage.js"
import userFake from "../fixtures/pages/user.Fail.json"

const loginPage = new LoginPage()
const userData = new UserData()
const dashboardPage = new DashboardPage()

describe('Criar usuário', () => {
  beforeEach(() => {
    loginPage.acessLoginPage()
  })

  it('1 - Criar usuário, fazer login e concluir onboarding', () => {

    loginPage.acessLoginPage()
  
    // Etapa de criação de usuário
    loginPage.formSignup()
  
    userData.getUser(0).then((user) => {
      userData.fillSignupForm(user)
      loginPage.checkSignPage()
  
      // Etapa de login
      loginPage.fillLoginForm(user.username, user.password)
      dashboardPage.checkTitleOnboarind()
  
      // Etapa de onboarding
      dashboardPage.nextButtonOnboarding(
        user.bankName,
        user.routingNumber,
        user.accountNumber
      )
    })
  })
 
    it('2 - Exibir mensagem de erro ao fazer login com credenciais inválidas', () => {
      
      loginPage.acessLoginPage()
      loginPage.failData(userFake.userFail.username, userFake.userFail.password)
     }
  )
  
    it('3 - Login com sucesso', () => {
      cy.fixture('database.json').then((data) => {
        const user = data.users[0]

        loginPage.acessLoginPage()
        loginPage.fillLoginForm(user.username, user.password)
        dashboardPage.checkToolbarHome()

      })
    }
  )  

    it('4 - Tentar registrar um novo usuário com informações incompletas', () => {    

      loginPage.acessLoginPage()
      loginPage.formSignup()      
      loginPage.buttonSignup()
      loginPage.checkErrorGeneric()      
    }
  )
})