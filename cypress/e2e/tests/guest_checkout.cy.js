/// <reference types="cypress" />

import guestCheckoutPage from '../pages/guest_checkout_page'
import shoppingCartPage from '../pages/shopping_chart_page'

describe('Guest checkout page testing', function(){
    it('Positive scenario', function(){

        cy.AddProductToCart(0)
        cy.AddProductToCart(4)

        shoppingCartPage
        .visitPage()
        .clickCheckoutButton()

        guestCheckoutPage
        .selectGuestCheckoutRadioButton()
        .clickContinueButton()
        .checkOrderSummary()
        .openShippingAddressBlock()
        .clickContinueButton()
        .checkInputsValidation()

    })
})