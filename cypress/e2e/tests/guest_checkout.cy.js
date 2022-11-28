/// <reference types="cypress" />

import guestCheckoutPage from '../pages/guest_checkout_page'
import shoppingCartPage from '../pages/shopping_chart_page'
import {guestCheckoutPageData} from '../../fixtures/input_data'

describe('Guest checkout page testing', function(){

    this.beforeEach(function(){

        cy.AddProductToCart(0)
        // cy.AddProductToCart(4)

        shoppingCartPage
        .visitPage()
        .clickCheckoutButton()
    })

    it.only('Negative scenario: Leave all required fields empty', function(){

        guestCheckoutPage
            .selectGuestCheckoutRadioButton()
            .clickContinueButton()
            .checkOrderSummary()
            // .fillRegionSelect(0)
            .clickContinueButton()
            .checkInputsValidation()

    })

    it('Negative scenario: Type into the first name field name with 2 characters', function(){

        guestCheckoutPage
            .selectGuestCheckoutRadioButton()
            .clickContinueButton()
            .checkOrderSummary()
            .fillFirstNameInput(guestCheckoutPageData.firstName2characters)
            .clickContinueButton()
            .checkInputsValidation()
            
    })

    it('Negative scenario: Type into the first name field name with 33 characters', function(){

        guestCheckoutPage
            .selectGuestCheckoutRadioButton()
            .clickContinueButton()
            .checkOrderSummary()
            .fillFirstNameInput(guestCheckoutPageData.firstName33characters)
            .clickContinueButton()
            .checkInputsValidation()
            
    })

    it('Negative scenario: Type into the last name field name with 2 characters', function(){

        guestCheckoutPage
            .selectGuestCheckoutRadioButton()
            .clickContinueButton()
            .checkOrderSummary()
            .fillLastNameInput(guestCheckoutPageData.lastName2characters)
            .clickContinueButton()
            .checkInputsValidation()
            
    })

    it('Negative scenario: Type into the last name field name with 33 characters', function(){

        guestCheckoutPage
            .selectGuestCheckoutRadioButton()
            .clickContinueButton()
            .checkOrderSummary()
            .fillLastNameInput(guestCheckoutPageData.lastName33characters)
            .clickContinueButton()
            .checkInputsValidation()
            
    })

    it('Positive scenario', function(){

        // cy.AddProductToCart(0)
        // // cy.AddProductToCart(4)

        // shoppingCartPage
        // .visitPage()
        // .clickCheckoutButton()

        guestCheckoutPage
        .selectGuestCheckoutRadioButton()
        .clickContinueButton()
        .checkOrderSummary()
        .clickContinueButton()
        .checkInputsValidation()
        .fillFirstNameInput(guestCheckoutPageData.firstName)
        .fillLastNameInput(guestCheckoutPageData.lastName)
        .fillEmailInput()
        .fillAddress1Input(guestCheckoutPageData.address1)
        .fillCityInput(guestCheckoutPageData.city)
        .fillRegionSelect(3)
        .fillZipCodeInput(guestCheckoutPageData.zipCode)
        .clickContinueButton()
        

        

        // .openShippingAddressBlock()
        // .openShippingAddressBlock()


        // .fillFirstNameInput()
        // .clickContinueButton()
        // .checkInputsValidation()
        // .openShippingAddressBlock()
        // .clickContinueButton()
        // .checkInputsValidation()



    })
})