import { be } from "date-fns/locale"

class LoginPage{

    selectorsList() {
        const selectors = {
            userNameField: "[type='text']",
            passwordField: "[type='password']",
            siginupField: "[href='/signup']",
            signPage: ".SignInForm-paper",
            signError: "[data-test='signin-error']",
            buttonSignin: "[type='submit']",
            buttonSignupSubmit: "[data-test='signup-submit']",
            erroGeneric: ".MuiFormHelperText-root"
        }

        return selectors
    }

    acessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    formSignup() {
        cy.get(this.selectorsList().siginupField).click()
    }

    checkSignPage() {
        cy.get(this.selectorsList().signPage).should('be.visible')
    }

    fillLoginForm(username, password) {
        cy.get("[name='username']").type(username)
        cy.get("[name='password']").type(password)
        cy.get("[type='submit']").click()
      }

      failData(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().buttonSignin).click()
        cy.get(this.selectorsList().signError).should('be.visible')

      }

      buttonSignup() {
        cy.get(this.selectorsList().buttonSignupSubmit).click()
      }

      checkErrorGeneric(){
        cy.get(this.selectorsList().erroGeneric).should('be.visible')
      }
}

export default LoginPage