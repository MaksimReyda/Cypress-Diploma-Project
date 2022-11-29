/// <reference types="cypress" />

import newUserCheckoutPage from '../pages/new_user_checkout_page'
import {loginData, newUserData} from '../../fixtures/input_data'
import guestCheckoutPage from '../pages/guest_checkout_page'
import shoppingCartPage from '../pages/shopping_chart_page'


describe('New user checkout test', function(){

    let isEmailValid = true

    this.beforeEach(function(){

        cy.AddProductToCart(0)
        // cy.AddProductToCart(4)

        shoppingCartPage
            .visitPage()
            .clickCheckoutButton()

        guestCheckoutPage
            .clickContinueButton()

    })

    it('Negative scenario: Leave all required fields empty', function(){

        newUserCheckoutPage
            .continueButtonClick()
            .checkInputValidation()

    })

    it('Negative scenario: Type into the first name field name with 2 characters', function(){

        newUserCheckoutPage
            .fillFirstNameInput(newUserData.firstName2characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the first name field name with 33 characters', function(){

        newUserCheckoutPage
            .fillFirstNameInput(newUserData.firstName33characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the last name field name with 2 characters', function(){

        newUserCheckoutPage
            .fillLastNameInput(newUserData.lastName2characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the last name field name with 33 characters', function(){

        newUserCheckoutPage
            .fillLastNameInput(newUserData.lastName33characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the email field, invalid email', function(){

        newUserCheckoutPage
            .fillEmailInput(!isEmailValid)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the address1 field name with 2 characters', function(){

        newUserCheckoutPage
            .fillAddress1Input(newUserData.address1_2characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the address1 field name with 129 characters', function(){

        newUserCheckoutPage
            .fillAddress1Input(newUserData.address1_129characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the city field name with 2 characters', function(){

        newUserCheckoutPage
            .fillCityInput(newUserData.city2characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the city field name with 129 characters', function(){

        newUserCheckoutPage
            .fillCityInput(newUserData.city129characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the zip code field code with 2 characters', function(){

        newUserCheckoutPage
            .fillZipCodeInput(newUserData.zipCode2characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the zip code field code with 11 characters', function(){

        newUserCheckoutPage
            .fillZipCodeInput(newUserData.zipCode11characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the Login name field name with 4 characters', function(){

        newUserCheckoutPage
            .fillLoginNameInput(newUserData.loginName4characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the Login field name with 65 characters', function(){

        newUserCheckoutPage
            .fillLoginNameInput(newUserData.loginName65characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })
    
    it('Negative scenario: Type into the Login field REGISTERED name', function(){

        newUserCheckoutPage
            .fillLoginNameInput(loginData.loginName)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the password field, pass with 3 characters', function(){

        newUserCheckoutPage
            .fillPasswordInput(newUserData.password3characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Type into the password field, pass with 21 characters', function(){

        newUserCheckoutPage
            .fillPasswordInput(newUserData.password21characters)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it('Negative scenario: Use different confirm password', function(){

        newUserCheckoutPage
            .fillPasswordInput(newUserData.password)
            .fillConfirmPasswordInput(newUserData.diffPassword)
            .continueButtonClick()
            .checkInputValidation()
            
    })

    it.only('Positive scenario', function(){

        newUserCheckoutPage
            // .fillFirstNameInput(newUserData.firstName)
            .fillFirstNameInput(newUserData.firstName)
            .fillLastNameInput(newUserData.lastName)
            .fillEmailInput(isEmailValid)
            .fillAddress1Input(newUserData.address1)
            .fillCityInput(newUserData.city)
            .fillRegionSelect(2)
            .fillZipCodeInput(newUserData.zipCode)
            .fillLoginNameInputWithNewName()
            .fillPasswordInput(newUserData.password)
            .fillConfirmPasswordInput(newUserData.password)
            .agreeToPrivacyPolicy()
            .continueButtonClick()
            // .checkInputValidation()
        
    })
})
