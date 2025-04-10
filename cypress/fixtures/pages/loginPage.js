class LoginPage{

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
            inputFielErroMenssage: '.oxd-text--span',
            messageForgotHeader: '.orangehrm-login-forgot-header'
                       
        }

        return selectors
    }

    acessLoginPage() {
        cy.visit('/auth/login').wait(1000)
    }

    loginWithUser(username, password) {
        if (username){
            cy.get(this.selectorsList().usernameField).type(username)
        }
        
        if (password) {
            cy.get(this.selectorsList().passwordField).type(password)
        }
        
        cy.get(this.selectorsList().loginButton).click()
    }    

    checkAcessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
        
    }

    checkAcessRequired(){
        cy.get(this.selectorsList().inputFielErroMenssage).should('be.visible')
    }
    
    clickForgotPassword(){
        cy.get(this.selectorsList().messageForgotHeader).click()
    }
}

export default LoginPage