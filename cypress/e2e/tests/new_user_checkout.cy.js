/// <reference types="cypress" />

import newUserCheckoutPage from '../pages/new_user_checkout_page'
import {newUserData} from '../../fixtures/input_data'
import guestCheckoutPage from '../pages/guest_checkout_page'
import shoppingCartPage from '../pages/shopping_chart_page'


describe('New user checkout test', function(){

    let isEmailValid = true


    it('Positive scenarion', function(){


        cy.AddProductToCart(0)
        // cy.AddProductToCart(4)

        shoppingCartPage
        .visitPage()
        .clickCheckoutButton()

        guestCheckoutPage
        .clickContinueButton()

        newUserCheckoutPage
        // .fillFirstNameInput(newUserData.firstName)
        .fillFirstNameInput('012345678901234567890123456789123')
        // .fillLastNameInput(newUserData.lastName)
        .fillLastNameInput('eq1')
        .fillEmailInput(!isEmailValid)
        .fillRegionSelect(0)
        .continueButtonClick()
        .checkInputValidation()
        
    })
})
