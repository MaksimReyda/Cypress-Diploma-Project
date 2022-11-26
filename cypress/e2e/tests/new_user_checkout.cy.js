/// <reference types="cypress" />

import newUserCheckoutPage from '../pages/new_user_checkout_page'
import {newUserData} from '../../fixtures/input_data'
import guestCheckoutPage from '../pages/guest_checkout_page'
import shoppingCartPage from '../pages/shopping_chart_page'


describe('New user checkout test', function(){


    it('Positive scenarion', function(){

        cy.AddProductToCart(0)
        // cy.AddProductToCart(4)

        shoppingCartPage
        .visitPage()
        .clickCheckoutButton()

        guestCheckoutPage
        .clickContinueButton()

        newUserCheckoutPage
        .fillFirstNameInput(newUserData.firstName)
        .fillLastNameInput(newUserData.lastName)
        
    })
})
