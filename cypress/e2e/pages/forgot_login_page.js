/// <reference types="cypress" />


class forgotLoginNmePage {
    pageLocators = {
        forgotLoginNameTitle: '.maintext',
        helpText: 'form#forgottenFrm > .heading4',
        lastNameInput: 'input#forgottenFrm_lastname',
        emailInput: 'input#forgottenFrm_email',
        continueButton: "button[title='Continue']",
        backButton: "a[title='Back']",
        continueButton: "button[title='Continue']",
        errorAlert: '.alert.alert-danger.alert-error',
        successAlert: '.alert.alert-success'
        // errorAlertLastName: '.alert.alert-danger.alert-error'
    }

    alertMessage = {
        success: 'Success: Your login name reminder has been sent to your e-mail address.',
        emptyEmailField: 'Error: The Email address was not provided or not found in our records, please try again!',
        emptyLastNameField: 'Error: The Last name was not provided or not found in our records, please try again!',
        wrongDataProviede: 'Error: No records found matching information your provided, please check your information and try again!',
        mainTitle: 'Forgot Your Login Name?',
        helpText: 'Enter the last name and e-mail address associated with your account. Click submit to have your login name emailed to you'
    }

    checkErrorMessage(locator, errorMessage){
        cy.get(locator).then(function(error){
            expect(error.text().trim()).contains(errorMessage)
        })
        return this
    }

    openForgotLoginNamePage(){
        cy.visit('https://automationteststore.com/index.php?rt=account/forgotten/loginname')
        return this
    }

    checkMainTitle(){
        cy.get(this.pageLocators.forgotLoginNameTitle).then(function(title){
            expect(title.text().trim()).contains('Forgot Your Login Name?')
        })
        return this
    }

    checkHelpText(){
        cy.get(this.pageLocators.helpText).then(function(helpText){
            expect(helpText.text().trim()).contains('Enter the last name and e-mail address associated with your account. Click submit to have your login name emailed to you')
        })
        return this
    }

    checkErrorMessageAllFieldsAreEmpty(){
        this.checkErrorMessage(this.pageLocators.errorAlert, this.alertMessage.emptyEmailField)
        return this
    }

    checkErrorMessageLastNameFieldIsEmpty(){
        this.checkErrorMessage(this.pageLocators.errorAlert, this.alertMessage.emptyLastNameField)
    }

    checkErrorMessageNameEmailFieldIsWrong(){
        this.checkErrorMessage(this.pageLocators.errorAlert, this.alertMessage.wrongDataProviede)
    }

    checkSuccessMessage(){
        this.checkErrorMessage(this.pageLocators.successAlert, this.alertMessage.success)
    }

    fillLastNameInput(lastName){
        cy.get(this.pageLocators.lastNameInput).click().clear().type(lastName)
        return this
    }

    fillEmailInput(email){
        cy.get(this.pageLocators.emailInput).click().clear().type(email)
        return this
    }

    fillWrongLastName(lastName){
        cy.get(this.pageLocators.lastNameInput).click().clear().type(lastName + '123')
        return this
    }

    backButttonClick(){
        cy.get(this.pageLocators.backButton).click()
        return this
    }

    continueButtonClick(){
        cy.get(this.pageLocators.continueButton).click()
        return this
    }

}

module.exports = new forgotLoginNmePage()