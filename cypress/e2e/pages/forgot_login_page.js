/// <reference types="cypress" />

import {forgotLoginPageData} from '../../fixtures/input_data'
import {loginData} from '../../fixtures/input_data'


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
        
    }




    openForgotLoginNamePage() {
        cy.visit('https://automationteststore.com/index.php?rt=account/forgotten/loginname')
        return this
    }

    checkMainTitle() {
        cy.get(this.pageLocators.forgotLoginNameTitle).then(function (title) {
            expect(title.text().trim()).contains('Forgot Your Login Name?')
        })
        return this
    }

    checkHelpText() {
        cy.get(this.pageLocators.helpText).then(function (helpText) {
            expect(helpText.text().trim()).contains('Enter the last name and e-mail address associated with your account. Click submit to have your login name emailed to you')
        })
        return this
    }

    checkInputValidation(){

        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        let lastNameInputData = {}, emailInputData = {}

        cy.isElementExist(this.pageLocators.errorAlert).then(function(isExist){

            console.log(isExist)

            if( isExist ){

                console.log('+++++++++++++')

                if(cy.get('#maincontainer > .container-fluid').find('.alert')){

                    cy.get('.alert.alert-danger.alert-error').then(function(errorMessage){

                        cy.get('.form-group > .input-group').each(function($el, index, $list){
    
                            cy.getElementAttribute($el.find('input'), 'value').then(function(inputValue){
                
                                cy.getElementAttribute($el.find('input'), 'name').then(function(inputName){
                                    
                                    console.log(inputName)

                                    if(inputName === 'lastname'){
                                        lastNameInputData.name = inputName
                                        lastNameInputData.value = inputValue
                                    } else if(inputName === 'email'){

                                        emailInputData.name = inputName
                                        emailInputData.value = inputValue

                                    }
        
                                }).then(function(){
                                    console.log(lastNameInputData)
                                    console.log(emailInputData)

                                    if(lastNameInputData.value === '' && emailInputData.value === ''){
                                        expect(errorMessage.text().trim()).contains(forgotLoginPageData.emailError)
                                    }
                                    else if(lastNameInputData.value === '' && emailInputData.value === loginData.email){
                                        expect(errorMessage.text().trim()).contains(forgotLoginPageData.lastNameError)
                                    }
                                    else if(lastNameInputData.value === '' && emailInputData.value === loginData.notRegisteredEmail){
                                        expect(errorMessage.text().trim()).contains(forgotLoginPageData.lastNameError)
                                    }
                                    else if(lastNameInputData.value === '' && emailInputData.value === loginData.notValidEmail){
                                        expect(errorMessage.text().trim()).contains(forgotLoginPageData.lastNameError)
                                    }
                                    else if(lastNameInputData.value === loginData.lastName && emailInputData.value === ''){
                                        expect(errorMessage.text().trim()).contains(forgotLoginPageData.emailError)
                                    }
                                    else if(lastNameInputData.value === loginData.notRegisteredLastName && emailInputData.value === ''){
                                        expect(errorMessage.text().trim()).contains(forgotLoginPageData.emailError)
                                    }
                                    else if(lastNameInputData.value === loginData.notRegisteredLastName && emailInputData.value === loginData.email){
                                        expect(errorMessage.text().trim()).contains(forgotLoginPageData.noRecorsdError)
                                    }
                                    else if(lastNameInputData.value === loginData.lastName && emailInputData.value === loginData.notRegisteredEmail){
                                        expect(errorMessage.text().trim()).contains(forgotLoginPageData.noRecorsdError)
                                    }
                                    else if(lastNameInputData.value === loginData.lastName && emailInputData.value === loginData.notValidEmail){
                                        expect(errorMessage.text().trim()).contains(forgotLoginPageData.noRecorsdError)
                                    }
                                })
                            })
                        })
                    })

                }


            } else{
                console.log('------------')
                cy.isElementExist('.alert.alert-success').then(function(isSuccess){
                    if(isSuccess){
                        console.log('SUCCESS MESSAGE')
                        cy.get('.alert.alert-success').then(function(successMessage){
                            expect(successMessage.text().trim()).contains(forgotLoginPageData.successMessage)
                        })
                    }
                })
            }
        })

        return this

    }


    fillLastNameInput(lastName) {
        cy.get(this.pageLocators.lastNameInput)
            .click()
            .clear()
            .type(lastName)
        
        return this
    }

    fillEmailAddress(email) {
        cy.get(this.pageLocators.emailInput)
            .click()
            .clear()
            .type(email)

        return this
    }


    backButttonClick() {
        cy.get(this.pageLocators.backButton).click()
        
        return this
    }

    continueButtonClick() {
        cy.get(this.pageLocators.continueButton).click()
       
        return this
    }

    // checkErrorMessageAllFieldsAreEmpty() {
    //     this.checkErrorMessage(this.pageLocators.errorAlert, this.alertMessage.emptyEmailField)
    //     return this
    // }

    // checkErrorMessageLastNameFieldIsEmpty() {
    //     this.checkErrorMessage(this.pageLocators.errorAlert, this.alertMessage.emptyLastNameField)
    // }

    // checkErrorMessageNameEmailFieldIsWrong() {
    //     this.checkErrorMessage(this.pageLocators.errorAlert, this.alertMessage.wrongDataProviede)
    // }

    // checkSuccessMessage() {
    //     this.checkErrorMessage(this.pageLocators.successAlert, this.alertMessage.success)
    // }

    // checkErrorMessage(locator, errorMessage) {
    //     cy.get(locator).then(function (error) {
    //         expect(error.text().trim()).contains(errorMessage)
    //     })
    //     return this
    // }

        // fillWrongLastName(lastName){
    //     cy.get(this.pageLocators.lastNameInput)
    //         .click()
    //         .clear()
    //         .type(lastName + '123')

    //     return this
    // }



}

module.exports = new forgotLoginNmePage()