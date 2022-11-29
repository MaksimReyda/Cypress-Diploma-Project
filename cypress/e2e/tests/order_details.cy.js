/// <reference types="cypress" />
import orderDetailsPage from '../pages/order_details_page'
import checkoutConfirmationPage from '../pages/checkout_confirmaiton_page'
import guestCheckoutPage from '../pages/guest_checkout_page'
import shoppingCartPage from '../pages/shopping_chart_page'
import mainPage from '../pages/main_page'
import {guestCheckoutPageData} from '../../fixtures/input_data'
import {checkoutConfirmationData} from '../../fixtures/input_data'
 



describe('Test order details page',  function(){
    let isEmailValid = true
    let isEmailReal = true

    let isIdReal = true, isIdValid = true



    it('Negative scenairo: Leave input fields empty', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .clickContinueButton()
            .checkFormValidation()

    })

    it('Negative scenairo: Leave order id field empty, enter unrial valid email', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillEmailInput(!isEmailReal, isEmailValid)
            .clickContinueButton()
            .checkFormValidation()

    })

    it('Negative scenairo: Leave order id field empty, enter unrial invalid email', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillEmailInput(!isEmailReal, !isEmailValid)
            .clickContinueButton()
            .checkFormValidation()

    })

    it('Negative scenairo: Enter unreal valid order id, leave email field empty', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillOrderIdInput(!isIdReal, isIdValid)
            .clickContinueButton()
            .checkFormValidation()

    })

    it('Negative scenairo: Enter unreal invalid order id, leave email field empty', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillOrderIdInput(!isIdReal, !isIdValid)
            .clickContinueButton()
            .checkFormValidation()

    })


    it('Negative scenairo: Enter unreal invalid order id, enter unreal invalid email', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillOrderIdInput(!isIdReal, !isIdValid)
            .fillEmailInput(!isEmailReal, !isEmailValid)
            .clickContinueButton()
            .checkFormValidation()

    })

    it('Negative scenairo: Enter unreal invalid order id, enter unreal valid email', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillOrderIdInput(!isIdReal, !isIdValid)
            .fillEmailInput(!isEmailReal, isEmailValid)
            .clickContinueButton()
            .checkFormValidation()

    })

    it('Negative scenairo: Enter unreal invalid order id, enter real invalid email', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillOrderIdInput(!isIdReal, !isIdValid)
            .fillEmailInput(isEmailReal, !isEmailValid)
            .clickContinueButton()
            .checkFormValidation()

    })
    
    it('Negative scenairo: Enter unreal invalid order id, enter real valid email', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillOrderIdInput(!isIdReal, !isIdValid)
            .fillEmailInput(isEmailReal, isEmailValid)
            .clickContinueButton()
            .checkFormValidation()

    })

    it('Negative scenairo: Enter unreal valid order id, enter real valid email', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillOrderIdInput(!isIdReal, isIdValid)
            .fillEmailInput(isEmailReal, isEmailValid)
            .clickContinueButton()
            .checkFormValidation()

    })

    it('Negative scenairo: Enter real valid order id, enter unreal valid email', function(){

        mainPage
            .visitMainPage()

        orderDetailsPage
            .openOrderDetailsPage()
            .fillOrderIdInput(!isIdReal, isIdValid)
            .fillEmailInput(!isEmailReal, isEmailValid)
            .clickContinueButton()
            .checkFormValidation()

    })

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
            .fillFirstNameInput(guestCheckoutPageData.firstName)
            .fillLastNameInput(guestCheckoutPageData.lastName)
            .fillEmailInput(isEmailValid)
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
            .fillOrderIdInput(isIdReal, isIdValid)
            .fillEmailInput(isEmailReal, isEmailValid)
            .clickContinueButton()
            .checkFormValidation()
            .checkOrderDetails()


    })

})