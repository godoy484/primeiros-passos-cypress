class MyInfoPage {

    selectorsList() {
        const selectors = {

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

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, licenceExpiryDate) {
        cy.get(this.selectorsList().genericFiel).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericFiel).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericFiel).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenceExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus(birthday) {
        cy.get(this.selectorsList().selectFilter).eq(0).click() // Abre o dropdown
        cy.wait(500)
        cy.get(this.selectorsList().selectorDropdown).eq('26').click() // Seleciona a 26ª opção
        cy.get(this.selectorsList().selectFilter).eq(4).click() // Abre o dropdown
        cy.get(this.selectorsList().selectorDropdown).eq('3').click() // Seleciona a 3ª opção
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthday)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().selectGender).eq(0).click()
        
    }
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close').click()
    }
    
    fillCustom(testField){
        cy.get(this.selectorsList().selectFilter).eq(9).click() // Abre o dropdown
        cy.get(this.selectorsList().selectorDropdown).eq('1').click() // Seleciona a 3ª opção
        cy.get(this.selectorsList().testField).clear().type(testField)
        cy.get(this.selectorsList().submitButton).eq(1).click()
    }

}
   export default MyInfoPage