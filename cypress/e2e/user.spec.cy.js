import LoginPage from '../fixtures/pages/loginPage.js'
import userData from '../fixtures/user-data.json'
import DashboardPage from '../fixtures/pages/dashboardPage.js'
import MenuPage from '../fixtures/pages/menuPage.js';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    inputFielErroMenssage: '.oxd-input-field-error-message',
    inputGroupMessage: '.oxd-input-group__message',
    messageForgotHeader: '.orangehrm-login-forgot-header',
    resetPassword: '.oxd-text--h6',
    messageForgotPassword: '.orangehrm-forgot-password-title',
    messageTextSpan: '.oxd-text--span',
    buttonCancel: "[type='button']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericFiel: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    selectFilter: "[data-v-67d2aedf='']",
    selectorDropdown: '.oxd-select-dropdown div',
    selectGender: '.oxd-radio-input',
    submitButton: "[type='submit']",
    testField: "[options='']"
  }
  
    it('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.usarname, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type("Teste")
    cy.get(selectorsList.middleNameField).clear().type("da Silva")
    cy.get(selectorsList.lastNameField).clear().type("Santos")
    cy.get(selectorsList.genericFiel).eq(3).clear().type('ID OK')
    cy.get(selectorsList.genericFiel).eq(4).clear().type('ID OK')
    cy.get(selectorsList.genericFiel).eq(5).clear().type('Licence OK')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-31-03')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.selectFilter).eq(0).click() // Abre o dropdown
    cy.wait(500)
    cy.get(selectorsList.selectorDropdown).eq('26').click() // Seleciona a 26ª opção
    cy.get(selectorsList.selectFilter).eq(4).click() // Abre o dropdown
    cy.get(selectorsList.selectorDropdown).eq('2').click() // Seleciona a 3ª opção
    cy.get(selectorsList.dateField).eq(1).clear().type('1990-10-07')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.selectGender).eq(0).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close').click()
    cy.get(selectorsList.selectFilter).eq(9).click() // Abre o dropdown
    cy.get(selectorsList.selectorDropdown).eq('3').click() // Seleciona a 3ª opção
    cy.get(selectorsList.testField).clear().type("Teste OK")
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get('.oxd-toast-close').click()
  })
})