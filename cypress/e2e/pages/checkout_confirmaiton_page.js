/// <reference types="cypress" />
import {checkoutConfirmationData} from '../../fixtures/input_data'

class checkoutConfirmationPage {

    checkoutConfirmationPageLocators = {
        confirmOrderButton: "[title='Confirm Order']",
        breadcrumbs: '.breadcrumb > li',
        itemsInYourCart: '.confirm_products.table > tbody > tr'
    }

    checkBreadcrumbs(){
        cy.get(this.checkoutConfirmationPageLocators.breadcrumbs).each(function($el, index, $list){
            expect($el.find('a').text().trim()).contains(checkoutConfirmationData.checkBreadcrumbs[index])
        })
        return this
    }

    clickConfirmOrderButton(){
        cy.get(this.checkoutConfirmationPageLocators.confirmOrderButton)
            .should('contain', 'Confirm Order')
            .click()

        return this
    }

    checkItemsInYourCart(){
        cy.GetDataFromOrderSummaryBlock().then(function(orderSummatyData){
            let itemsInYourCart = []
            cy.get('.confirm_products.table > tbody > tr').each(function($el, index, $list){
                cy.get($el.find('td:nth-of-type(2)')).then(function(productName){
                    console.log(productName.text())
                    cy.get($el.find('td:nth-of-type(3)')).then(function(productPrice){
                        cy.get($el.find('td:nth-of-type(4)')).then(function(quantity){
                            itemsInYourCart.push({
                                name: productName.text().trim(),
                                price: productPrice.text().trim(),
                                quantity: quantity.text().trim()
                            })
                        })
                    })
                })
            }).then(function(){
                console.log(orderSummatyData)
                console.log(itemsInYourCart)
                for(let i = 0; i < itemsInYourCart.length; i++){
                    expect(itemsInYourCart[i].name).contains(orderSummatyData[i].name)
                    expect(itemsInYourCart[i].price).contains(orderSummatyData[i].price)
                    expect(itemsInYourCart[i].quantity).contains(orderSummatyData[i].quantity)
                }
            })
        })

        return this
    }

}

module.exports = new checkoutConfirmationPage()