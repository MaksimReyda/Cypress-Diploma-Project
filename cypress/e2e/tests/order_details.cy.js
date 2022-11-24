/// <reference types="cypress" />
import orderDetailsPage from '../pages/order_details_page'
import checkoutConfirmationPage from '../pages/checkout_confirmaiton_page'
import guestCheckoutPage from '../pages/guest_checkout_page'
import shoppingCartPage from '../pages/shopping_chart_page'
import {guestCheckoutPageData} from '../../fixtures/input_data'
import {checkoutConfirmationData} from '../../fixtures/input_data'



describe('Test order details page',  function(){

    this.beforeEach(function(){
        cy.AddProductToCart(0)
        cy.AddProductToCart(4)

        shoppingCartPage
        .visitPage()
        .clickCheckoutButton()

        guestCheckoutPage
        .selectGuestCheckoutRadioButton()
        .clickContinueButton()
        .checkOrderSummary()
        .fillFirstNameInput(guestCheckoutPageData.firstName)
        .fillLastNameInput(guestCheckoutPageData.lastName)
        .fillEmailInput()
        .fillAddress1Input(guestCheckoutPageData.address1)
        .fillCityInput(guestCheckoutPageData.city)
        .fillRegionSelect(3)
        .fillZipCodeInput(guestCheckoutPageData.zipCode)
        .clickContinueButton()

        checkoutConfirmationPage
        .checkBreadcrumbs()
        .checkItemsInYourCart()
        .clickConfirmOrderButton()
        .openInvoicePage()

    })


    it.only('Positive scenario', function(){

        orderDetailsPage
        .openOrderDetailsPage()
        // .checkFormValidation()
        .fillOrderIdInput(true, true)
        .fillEmailInput(true, true)
        .clickContinueButton()
        .checkFormValidation()
        .checkOrderDetails()


    })

    it('Negative scenairo', function(){

        orderDetailsPage
        .openOrderDetailsPage()
        .checkOrderDetails()
        // .checkFormValidation()
        .fillOrderIdInput(true, true)
        .fillEmailInput(false, true)
        .clickContinueButton()
        .checkFormValidation()


    })
})