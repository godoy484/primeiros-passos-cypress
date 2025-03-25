describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
    inputFielErroMenssage: '.oxd-input-field-error-message',
    inputGroupMessage: '.oxd-input-group__message',
    messageForgotHeader: '.orangehrm-login-forgot-header',
    resetPassword: '.oxd-text--h6',
    messageForgotPassword: '.orangehrm-forgot-password-title',
    messageTextSpan: '.oxd-text--span',
    buttonCancel: "[type='button']",
    urlToVisit: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  }

  it('1 - Login - Success', () => {
    cy.visit(selectorsList.urlToVisit).wait(1000)
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('2 - Login - Fail - Username', () => {
    cy.visit(selectorsList.urlToVisit).wait(1000)
    cy.get(selectorsList.usernameField).type('teste')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
  it('3 - Login - Fail - Password', () => {
    cy.visit(selectorsList.urlToVisit).wait(1000)
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('teste')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
  it('4 - Login - Fail - No Password', () => {
    cy.visit(selectorsList.urlToVisit).wait(1000)
    cy.get(selectorsList.usernameField).type('Admin')    
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.inputFielErroMenssage)
  })
  it('5 - Login - Fail - No Username', () => {
    cy.visit(selectorsList.urlToVisit) .wait(1000)   
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.inputGroupMessage)
  })
  it('6 - Login - Fail - No Usarname/Password', () => {
    cy.visit(selectorsList.urlToVisit).wait(1000)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.inputGroupMessage)
  })
  it('7 - Login - Fail - Forgot your Password', () => {
    cy.visit(selectorsList.urlToVisit).wait(1000)
    cy.get(selectorsList.messageForgotHeader).click()
    cy.get(selectorsList.resetPassword)    
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.messageForgotPassword)
  })
  it('8 - Login - Fail - Forgot your Password - No Usarname', () => {
    cy.visit(selectorsList.urlToVisit).wait(1000)
    cy.get(selectorsList.messageForgotHeader).click()
    cy.get(selectorsList.resetPassword)        
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.messageTextSpan)
  })
  it('9 - Login - Fail - Forgot your Password - Return Home', () => {
    cy.visit(selectorsList.urlToVisit).wait(1000)
    cy.get(selectorsList.messageForgotHeader).click()
    cy.get(selectorsList.resetPassword)        
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.messageTextSpan)
    cy.get(selectorsList.buttonCancel).click()
    cy.get(selectorsList.messageForgotHeader)
  })
})