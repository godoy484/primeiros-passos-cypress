class DashboardPage {

selectorsList() {

    const selectors = {
       onboardingButton: "[data-test='user-onboarding-next']",
       onboardingTitle: "[style='padding-left: 20px;']",
       createBankTitle: "[data-test='user-onboarding-dialog-title']",
       bankNameField: "[placeholder='Bank Name']",
       routingNumberField: "[placeholder='Routing Number']",
       accountNumberField: "[placeholder='Account Number']",
       bankAccountSubmit: "[data-test='bankaccount-submit']",
       textFinished: "[style='padding-left: 20px;']",
       buttonDone: ".MuiButton-textPrimary",
       toolbarHome: ".MuiToolbar-regular"
    }

    return selectors
    }

    nextButtonOnboarding(bankName, routingNumber, accountNumber) {

        cy.get(this.selectorsList().onboardingButton).click()
        cy.get(this.selectorsList().createBankTitle).should('be.visible')
        cy.get(this.selectorsList().bankNameField).type(bankName)
        cy.get(this.selectorsList().routingNumberField).type(routingNumber)
        cy.get(this.selectorsList().accountNumberField).type(accountNumber)
        cy.get(this.selectorsList().bankAccountSubmit).click()
        cy.get(this.selectorsList().textFinished).should('be.visible')
        cy.get(this.selectorsList().buttonDone).click()
        cy.get(this.selectorsList().toolbarHome).should('be.visible')
    }

    checkTitleOnboarind() {
        cy.get(this.selectorsList().onboardingTitle).should('be.visible')
    }

    checkToolbarHome() {
        cy.get(this.selectorsList().toolbarHome).should('be.visible')
    }
    

}


export default DashboardPage