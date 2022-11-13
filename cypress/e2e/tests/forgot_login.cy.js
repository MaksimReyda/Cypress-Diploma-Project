/// <reference types="cypress" />

import forgotLoginPage from '../pages/forgot_login_page'
import {loginData} from '../../fixtures/input_data'



describe('Test Forgot login page', function(){
    it('Positive scenario', function(){
        forgotLoginPage.openForgotLoginNamePage()
            .checkMainTitle()
            .checkHelpText()
            .fillLastNameInput(loginData.lastName)
            .fillEmailInput(loginData.email)
            .continueButtonClick()
            .checkSuccessMessage()
    })

    it('Negative scenario: leave all fields empty', function(){
        forgotLoginPage.openForgotLoginNamePage()
            .checkMainTitle()
            .checkHelpText()
            .continueButtonClick()
            .checkErrorMessageAllFieldsAreEmpty()
    })

    it('Negative scenario: leave Last Name field empty', function(){
        forgotLoginPage.openForgotLoginNamePage()
            .checkMainTitle()
            .checkHelpText()
            .fillEmailInput(loginData.email)
            .continueButtonClick()
            .checkErrorMessageLastNameFieldIsEmpty()
    })


    it('Negative scenario: leave Email field empty', function(){
        forgotLoginPage.openForgotLoginNamePage()
            .checkMainTitle()
            .checkHelpText()
            .fillLastNameInput(loginData.lastName)
            .continueButtonClick()
            .checkErrorMessageAllFieldsAreEmpty()
    })

    it.only('Negative scenario: enter wrong data to Last Name field', function(){
        forgotLoginPage.openForgotLoginNamePage()
            .checkMainTitle()
            .checkHelpText()
            .fillWrongLastName(loginData.lastName)
            .fillEmailInput(loginData.email)
            .continueButtonClick()
            .checkErrorMessageNameEmailFieldIsWrong()
        
    })


})