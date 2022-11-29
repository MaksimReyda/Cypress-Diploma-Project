/// <reference types="cypress" />

import randomSubcategoryPage from '../pages/random_subcategory_page'
import mainShopPage from '../pages/main_page'
import shoppingCartPage from '../pages/shopping_chart_page'
import checkoutConfirmationPage from '../pages/checkout_confirmaiton_page'
import guestCheckoutPage from '../pages/guest_checkout_page'
import {guestCheckoutPageData} from '../../fixtures/input_data'
import orderDetailsPage from '../pages/order_details_page'


describe('Random subcategory test', function(){
    it('Positive scenarion', function(){

        mainShopPage
            .visitMainPage()

        randomSubcategoryPage
            .selectRabdomSubcategoty()
            .addToCartAllProducts()


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
        
        orderDetailsPage
            .openOrderDetailsPage()
            // .checkFormValidation()
            .fillOrderIdInput(true, true)
            .fillEmailInput(true, true)
            .clickContinueButton()
            .checkFormValidation()
            .checkOrderDetails()


    })
})

