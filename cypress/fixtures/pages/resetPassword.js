class ResetPassword{

    selectorsList() {
        const selectors = {
            messageForgotPassword: '.orangehrm-forgot-password-title',
            resetPasswordUser: '.oxd-input',
            MessageForgotSucess: '.oxd-text--h6',
            messageTextSpan: '.oxd-text--span',
            clickCancelButton: '.oxd-button--ghost'
        }

        return selectors
    }

    checkForgotPassword() {
        cy.get(this.selectorsList().messageForgotPassword)
    }
    
    inputUserName() {
        cy.get(this.selectorsList().resetPasswordUser)
    }

    checkForgotSucess() {
        cy.get(this.selectorsList().MessageForgotSucess)
    }

    checkMessageRequired() {
        cy.get(this.selectorsList().messageTextSpan)
    }

    cancelButton() {
        cy.get(this.selectorsList().clickCancelButton).click()
    }    
}

export default ResetPassword