class CreateAccount{

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            submitButton: "[type='submit']",
            messageSignup: "[data-test='signup-title']"
        }
        return selectors
    }

    signupUser(firstName, lastName,  ) {
        cy.get(this.selectorsList().firstNameField).type('Primeiro-1')
        cy.get(this.selectorsList().lastNameField).type('Último-1')
        cy.get(this.selectorsList().userNameField).type('user-test@1')
        cy.get(this.selectorsList().passwordField).type('secr3t')
        cy.get(this.selectorsList().confirmPasswordField).type('secr3t')
        cy.get(this.selectorsList().submitButton).click()
    }

}

export default CreateAccount