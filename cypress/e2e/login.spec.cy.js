import userData from '../fixtures/user-data.json'
import LoginPage from '../fixtures/pages/loginPage'
import DashboardPage from '../fixtures/pages/dashboardPage'
import ResetPassword from '../fixtures/pages/resetPassword'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const resetPassword = new ResetPassword()

describe('Orange HRM Tests', () => {

  it('1 - Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
  })
    

  it('2 - Login - Fail - Username', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userSucess.password)
    loginPage.checkAcessInvalid()
  })


  it('3 - Login - Fail - Password', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })


  it('4 - Login - Fail - No Password', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, '')
    loginPage.checkAcessRequired()    
  })


  it('5 - Login - Fail - No Username', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser('', userData.userSucess.password)
    loginPage.checkAcessRequired()    
  })


  it('6 - Login - Fail - No Username/Password', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser('', '')
    loginPage.checkAcessRequired()    
  })


  it('7 - Login - Fail - Forgot your Password', () => {
    loginPage.acessLoginPage()
    loginPage.clickForgotPassword()
    resetPassword.checkForgotPassword()    
    loginPage.loginWithUser(userData.userFail.username)
    resetPassword.checkForgotSucess()    
  })


  it('8 - Login - Fail - Forgot your Password - No Username', () => {
    loginPage.acessLoginPage()
    loginPage.clickForgotPassword()
    resetPassword.checkForgotPassword()    
    loginPage.loginWithUser('')
    resetPassword.checkMessageRequired()
  })
  
  it('9 - Login - Fail - Forgot your Password - Return Home', () => {
    loginPage.acessLoginPage()
    loginPage.clickForgotPassword()
    resetPassword.checkForgotPassword()    
    loginPage.loginWithUser('')
    resetPassword.checkMessageRequired()
    resetPassword.cancelButton()
  })
})