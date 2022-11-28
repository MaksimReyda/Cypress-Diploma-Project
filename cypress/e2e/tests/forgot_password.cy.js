/// <reference types="cypress" />

import forgotPasswordPage from '../pages/forgot_password_page'
import {loginData} from '../../fixtures/input_data'

describe('Test forgot password page', function(){

    it('Negative scenario: Leave all fields empty', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .continueButtonClick()
        .checkInputValidation()

    })

    it('Negative scenario: Leave Login name field empty, use registered email', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .fillEmailAddress(loginData.email)
        .continueButtonClick()
        .checkInputValidation()

    })

    it('Negative scenario: Leave Login name field empty, use NOT registered email', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .fillEmailAddress(loginData.notRegisteredEmail)
        .continueButtonClick()
        .checkInputValidation()

    })

    it('Negative scenario:  Leave Login name field empty, use invalid email', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .fillEmailAddress(loginData.notValidEmail)
        .continueButtonClick()
        .checkInputValidation()


    })

    it('Negative scenario:  Leave Email address field empty, use registered login name', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .fillLoginName(loginData.loginName)
        .continueButtonClick()
        .checkInputValidation()
        
    })

    it('Negative scenario:  Leave Email address field empty, use NOT registered login name', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .fillLoginName(loginData.notRegisteredLoginName)
        .continueButtonClick()
        .checkInputValidation()
        
    })

    it('Negative scenario:   Use NOT registered login name and registered email', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .fillLoginName(loginData.notRegisteredLoginName)
        .fillEmailAddress(loginData.email)
        .continueButtonClick()
        .checkInputValidation()
        
    })

    it('Negative scenario:   Use registered login name and NOT registered email', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .fillLoginName(loginData.loginName)
        .fillEmailAddress(loginData.notRegisteredEmail)
        .continueButtonClick()
        .checkInputValidation()
        
    })

    it('Negative scenario:   Use registered login name and NOT valid email', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .fillLoginName(loginData.loginName)
        .fillEmailAddress(loginData.notValidEmail)
        .continueButtonClick()
        .checkInputValidation()
        
    })

    it('Positive scenario:   Use registered login name and NOT valid email', function(){

        forgotPasswordPage
        .openForgotPasswordPage()
        .checkMainTitle()
        .checkHelpText()
        .fillLoginName(loginData.loginName)
        .fillEmailAddress(loginData.email)
        .continueButtonClick()
        .checkInputValidation()
        
    })


})