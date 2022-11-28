/// <reference types="cypress" />

import {forgotPasswordPageData} from '../../fixtures/input_data'
import {loginData} from '../../fixtures/input_data'

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
        closeAlertButton: '.alert.alert-danger.alert-error > .close',

        inputs: '.form-group > .input-group'
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
            expect(title.text().trim()).contains(forgotPasswordPageData.mainTitle)
        })
        return this
    }

    checkHelpText(){
        cy.get(this.pageLocators.helpText).then(function(helpText){
            expect(helpText.text().trim()).contains(forgotPasswordPageData.helpText)
        })
        return this
    }

    checkInputValidation(){

        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        let loginNameInputData = {}, emailInputData = {}

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

                                    if(inputName === 'loginname'){
                                        loginNameInputData.name = inputName
                                        loginNameInputData.value = inputValue
                                    } else if(inputName === 'email'){

                                        emailInputData.name = inputName
                                        emailInputData.value = inputValue

                                    }
        
                                }).then(function(){
                                    console.log(loginNameInputData)
                                    console.log(emailInputData)

                                    if(loginNameInputData.value === '' && emailInputData.value === ''){
                                        expect(errorMessage.text().trim()).contains(forgotPasswordPageData.emailError)
                                    }
                                    else if(loginNameInputData.value === '' && emailInputData.value === loginData.email){
                                        expect(errorMessage.text().trim()).contains(forgotPasswordPageData.loginNameError)
                                    }
                                    else if(loginNameInputData.value === '' && emailInputData.value === loginData.notRegisteredEmail){
                                        expect(errorMessage.text().trim()).contains(forgotPasswordPageData.loginNameError)
                                    }
                                    else if(loginNameInputData.value === '' && emailInputData.value === loginData.notValidEmail){
                                        expect(errorMessage.text().trim()).contains(forgotPasswordPageData.loginNameError)
                                    }
                                    else if(loginNameInputData.value === loginData.loginName && emailInputData.value === ''){
                                        expect(errorMessage.text().trim()).contains(forgotPasswordPageData.emailError)
                                    }
                                    else if(loginNameInputData.value === loginData.notRegisteredLoginName && emailInputData.value === ''){
                                        expect(errorMessage.text().trim()).contains(forgotPasswordPageData.emailError)
                                    }
                                    else if(loginNameInputData.value === loginData.notRegisteredLoginName && emailInputData.value === loginData.email){
                                        expect(errorMessage.text().trim()).contains(forgotPasswordPageData.noRecorsdError)
                                    }
                                    else if(loginNameInputData.value === loginData.loginName && emailInputData.value === loginData.notRegisteredEmail){
                                        expect(errorMessage.text().trim()).contains(forgotPasswordPageData.noRecorsdError)
                                    }
                                    else if(loginNameInputData.value === loginData.loginName && emailInputData.value === loginData.notValidEmail){
                                        expect(errorMessage.text().trim()).contains(forgotPasswordPageData.noRecorsdError)
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
                            expect(successMessage.text().trim()).contains(forgotPasswordPageData.successMessage)
                        })
                    }
                })
            }
        })

        return this


    }

    // checkSuccessMessage(){
    //     cy.get(this.pageLocators.successAlert).then(function(alert){
    //         expect(alert.text().trim()).contains(forgotPasswordPageData.successMessage)
    //     })
    //     return this
    // }

    // checkErrorMessage(){
    //     cy.get(this.pageLocators.errorAlert).then(function(errorMessage){
    //         expect(errorMessage.text().trim()).contains('Error: The Email address was not provided or not found in our records, please try again!')
    //     })
    //     return this
    // }

    // checkErrorMessageLoginName(){
    //     cy.get(this.pageLocators.errorAlertLoginName).then(function(errorMessage){
    //         expect(errorMessage.text().trim()).contains('Error: The Login name was not provided or not found in our records, please try again!')
    //     })
    //     return this
    // }

    // checkErrorMessageEmailAddress(){
    //     cy.get(this.pageLocators.errorAlertEmail).then(function(errorMessage){
    //         expect(errorMessage.text().trim()).contains('Error: The Email address was not provided or not found in our records, please try again!')
    //     })
    //     return this
    // }

    backButtonClick(){
        cy.get(this.pageLocators.backButton)
            .contains('Back')
            .click()
        return this
    }
    
    continueButtonClick(){
        cy.get(this.pageLocators.continueButton)
            .contains('Continue')
            .click()
        
        return this
    }

    fillLoginName(loginName){
        cy.get(this.pageLocators.loginNameInput)
            .click()
            .clear()
            .type(loginName)
        
        return this
    }

    fillEmailAddress(email){
        cy.get(this.pageLocators.emailInput)
            .click()
            .clear()
            .type(email)
        
        return this
    }

    closeAlert(){
        cy.get(this.pageLocators.closeAlertButton)
            .click()
        
        
        return this
    }
}

module.exports = new forgotPasswordPage()