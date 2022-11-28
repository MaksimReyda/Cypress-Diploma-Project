/// <reference types="cypress" />

import forgotPasswordPage from '../pages/forgot_password_page'
import {loginData} from '../../fixtures/input_data'

describe('Test forgot password page', function(){
    // const forgotPassword = new forgotPasswordPage()

    it('Positive scenario', function(){
        // forgotPasswordPage.openForgotPasswordPage()

        // forgotPasswordPage.checkMainTitle()
        // forgotPasswordPage.checkHelpText()

        // forgotPasswordPage.fillLoginName(loginData.loginName)
        // forgotPasswordPage.fillEmailAddress(loginData.email)

        // forgotPasswordPage.continueButtonClick()
        // forgotPasswordPage.checkSuccessMessage()

        forgotPasswordPage.openForgotPasswordPage()
            .checkMainTitle()
            .checkHelpText()
            .fillLoginName(loginData.loginName)
            .fillEmailAddress(loginData.email)
            .continueButtonClick()
            .checkSuccessMessage()

    })

    it('Negative scenario: leave all fields empty', function(){
        forgotPasswordPage.openForgotPasswordPage()
            .checkMainTitle()
            .checkHelpText()
            .continueButtonClick()
            .checkErrorMessage()
    })

    it('Negative scenario: leave Login Name field empty', function(){
        forgotPasswordPage.openForgotPasswordPage()
            .checkMainTitle()
            .checkHelpText()
            .fillEmailAddress(loginData.email)
            .continueButtonClick()
            .checkErrorMessageLoginName()
    })

    it('Negative scenario: leave Email Address field empty', function(){
        forgotPasswordPage.openForgotPasswordPage()
            .checkMainTitle()
            .checkHelpText()
            .fillLoginName(loginData.loginName)
            .continueButtonClick()
            .checkErrorMessageEmailAddress()
            .closeAlert()
    })
    
    it.only('Validation test', function(){
        forgotPasswordPage
            .openForgotPasswordPage()
            .checkInputValidation()
            // .fillLoginName(loginData.loginName)
            .fillLoginName(loginData.notRegisteredLoginName)
            .fillEmailAddress(loginData.email)
            // .fillEmailAddress(loginData.notValidEmail)
            .continueButtonClick()
            .checkInputValidation()
    })

})