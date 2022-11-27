/// <reference types="cypress" />

import shoppingCartPage from '../pages/shopping_chart_page'
// import {mainPageData} from '../../fixtures/input_data'


describe('Testing the Shopping chart page', function(){

    it('Positive scenario: Check the cart table', function(){
        
        cy.AddProductToCart(0)
        cy.AddProductToCart(5)

        shoppingCartPage
            .visitPage()
            .checkCartTable()
    })

    it('Positive scenario: Add one product to cart and remove it', function(){

        cy.AddProductToCart(0)

        shoppingCartPage
            .visitPage()
            .checkCartTable()
            .removeItemFromCart()
            .checkCartTable()
    })

    it('Positive scenario: Add two products to cart and remove one', function(){

        cy.AddProductToCart(0)
        cy.AddProductToCart(5)

        shoppingCartPage
            .visitPage()
            .checkCartTable()
            .removeItemFromCart()
            .checkCartTable()
    })

    it('Positive scenario: Add two products to cart and remove them', function(){

        cy.AddProductToCart(0)
        cy.AddProductToCart(5)

        shoppingCartPage
            .visitPage()
            .checkCartTable()
            .removeItemFromCart()
            .checkCartTable()
            .removeItemFromCart()
            .checkCartTable()
    })

    it("Positive scenario: Add two products to cart, remove one and click the Continue button", function(){

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