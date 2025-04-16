class UserData {

    getUser(index = 0) {
      return cy.fixture('database.json').then((data) => data.users[index])
    }

    selectorsList() {
        return{
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            submitButton: "[type='submit']",
            messageSignup: "[data-test='signup-title']"
        }
    }
  
   
    fillSignupForm(user) {
        const selectors = this.selectorsList()

            cy.get(selectors.firstNameField).type(user.firstName)
            cy.get(selectors.lastNameField).type(user.lastName)
            cy.get(selectors.userNameField).type(user.username)
            cy.get(selectors.passwordField).type(user.password)
            cy.get(selectors.confirmPasswordField).type(user.password) // Confirmar a senha
            cy.get(selectors.submitButton).click()
    }
  }
  
export default UserData