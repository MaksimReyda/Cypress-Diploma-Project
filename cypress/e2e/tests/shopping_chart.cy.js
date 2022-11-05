/// <reference types="cypress" />

import shoppingCartPage from '../pages/shopping_chart_page'
// import {mainPageData} from '../../fixtures/input_data'


describe('Testing the Shopping chart page', function(){
    it("Positive scenario", function(){
        shoppingCartPage
        .visitPage()
        .checkCartTable()
        // .viewCart()
        // .removeItemFromCart()

        // isTopCartEmpty()
    })
})