import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[type='submit']",
    inputFielErroMenssage: '.oxd-input-field-error-message',
    inputGroupMessage: '.oxd-input-group__message',
    messageForgotHeader: '.orangehrm-login-forgot-header',
    resetPassword: '.oxd-text--h6',
    messageForgotPassword: '.orangehrm-forgot-password-title',
    messageTextSpan: '.oxd-text--span',
    buttonCancel: "[type='button']",
    dashboardGrid: ".orangehrm-dashboard-grid"
  }

    it('1 - Login - Success', () => {
    cy.visit('/auth/login').wait(1000)
    cy.get(selectorsList.usernameField).type(userData.userSucess.usarname)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('2 - Login - Fail - Username', () => {
    cy.visit('/auth/login').wait(1000)
    cy.get(selectorsList.usernameField).type(userData.userFail.password)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
  it('3 - Login - Fail - Password', () => {
    cy.visit('/auth/login').wait(1000)
    cy.get(selectorsList.usernameField).type(userData.userSucess.usarname)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
  it('4 - Login - Fail - No Password', () => {
    cy.visit('/auth/login').wait(1000)
    cy.get(selectorsList.usernameField).type(userData.userSucess.usarname)    
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.inputFielErroMenssage)
  })
  it('5 - Login - Fail - No Username', () => {
    cy.visit('/auth/login') .wait(1000)   
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.inputGroupMessage)
  })
  it('6 - Login - Fail - No Usarname/Password', () => {
    cy.visit('/auth/login').wait(1000)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.inputGroupMessage)
  })
  it('7 - Login - Fail - Forgot your Password', () => {
    cy.visit('/auth/login').wait(1000)
    cy.get(selectorsList.messageForgotHeader).click()
    cy.get(selectorsList.resetPassword)    
    cy.get(selectorsList.usernameField).type(userData.userSucess.usarname)
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.messageForgotPassword)
  })
  it('8 - Login - Fail - Forgot your Password - No Usarname', () => {
    cy.visit('/auth/login').wait(1000)
    cy.get(selectorsList.messageForgotHeader).click()
    cy.get(selectorsList.resetPassword)        
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.messageTextSpan)
  })
  it('9 - Login - Fail - Forgot your Password - Return Home', () => {
    cy.visit('/auth/login').wait(1000)
    cy.get(selectorsList.messageForgotHeader).click()
    cy.get(selectorsList.resetPassword)        
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.messageTextSpan)
    cy.get(selectorsList.buttonCancel).click()
    cy.get(selectorsList.messageForgotHeader)
  })
})