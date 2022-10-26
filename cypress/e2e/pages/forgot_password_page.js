/// <reference types="cypress" />

class forgotPasswordPage {
    pageLocators = {
        forgotPasswordTitle: '.maintext',
        helpText: 'form#forgottenFrm > .heading4',
        backButton: "a[title='Back']",
        continueButton: "button[title='Continue']",
        loginNameInput: 'input#forgottenFrm_loginname',
        emailInput: 'input#forgottenFrm_email',
        successAlert: '.alert.alert-success',
        errorAlert: '.alert.alert-danger.alert-error',
        errorAlertLoginName: '.alert.alert-danger.alert-error',
        errorAlertEmail: '.alert.alert-danger.alert-error',
        closeAlertButton: '.alert.alert-danger.alert-error > .close'
    }

    openForgotPasswordPage(){
        cy.visit('https://automationteststore.com/index.php?rt=account/forgotten/password')
        return this
    }

    // getMainTitle(){
    //     cy.get(this.pageLocators.forgotPasswordTitle)
    // }

    checkMainTitle(){
        cy.get(this.pageLocators.forgotPasswordTitle).then(function(title){
            expect(title.text().trim()).contains('Forgot Your Password?')
        })
        return this
    }

    checkHelpText(){
        cy.get(this.pageLocators.helpText).then(function(helpText){
            expect(helpText.text().trim()).contains('Enter the login name and e-mail address associated with your account. Click submit to request password reset')
        })
        return this
    }

    checkSuccessMessage(){
        cy.get(this.pageLocators.successAlert).then(function(alert){
            expect(alert.text().trim()).contains('Success: Password reset link has been sent to your e-mail address')
        })
        return this
    }

    checkErrorMessage(){
        cy.get(this.pageLocators.errorAlert).then(function(errorMessage){
            expect(errorMessage.text().trim()).contains('Error: The Email address was not provided or not found in our records, please try again!')
        })
        return this
    }

    checkErrorMessageLoginName(){
        cy.get(this.pageLocators.errorAlertLoginName).then(function(errorMessage){
            expect(errorMessage.text().trim()).contains('Error: The Login name was not provided or not found in our records, please try again!')
        })
        return this
    }

    checkErrorMessageEmailAddress(){
        cy.get(this.pageLocators.errorAlertEmail).then(function(errorMessage){
            expect(errorMessage.text().trim()).contains('Error: The Email address was not provided or not found in our records, please try again!')
        })
        return this
    }

    backButtonClick(){
        cy.get(this.pageLocators.backButton).contains('Back').click()
        return this
    }
    
    continueButtonClick(){
        cy.get(this.pageLocators.continueButton).contains('Continue').click()
        return this
    }

    fillLoginName(loginName){
        cy.get(this.pageLocators.loginNameInput).click().clear().type(loginName)
        return this
    }

    fillEmailAddress(email){
        cy.get(this.pageLocators.emailInput).click().clear().type(email)
        return this
    }

    closeAlert(){
        cy.get(this.pageLocators.closeAlertButton).click()
        return this
    }
}

module.exports = new forgotPasswordPage()