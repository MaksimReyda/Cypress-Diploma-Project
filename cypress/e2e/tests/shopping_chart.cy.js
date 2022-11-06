/// <reference types="cypress" />

import shoppingCartPage from '../pages/shopping_chart_page'
// import {mainPageData} from '../../fixtures/input_data'


describe('Testing the Shopping chart page', function(){
    it("Positive scenario", function(){
        cy.AddProductToCart(0)
        cy.AddProductToCart(5)

        shoppingCartPage
        .visitPage()
        .checkCartTable()
        .removeItemFromCart()
        .clickCheckoutButton()
        // .viewCart()
        // .removeItemFromCart()

        // isTopCartEmpty()
    })
})