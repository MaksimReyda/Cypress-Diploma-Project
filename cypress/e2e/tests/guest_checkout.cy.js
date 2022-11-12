/// <reference types="cypress" />

import guestCheckoutPage from '../pages/guest_checkout_page'
import shoppingCartPage from '../pages/shopping_chart_page'
import {guestCheckoutPageData} from '../../fixtures/input_data'

describe('Guest checkout page testing', function(){
    it('Positive scenario', function(){

        cy.AddProductToCart(0)
        // cy.AddProductToCart(4)

        shoppingCartPage
        .visitPage()
        .clickCheckoutButton()

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