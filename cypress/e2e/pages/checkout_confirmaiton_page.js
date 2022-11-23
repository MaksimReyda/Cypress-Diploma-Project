/// <reference types="cypress" />
import {checkoutConfirmationData} from '../../fixtures/input_data'

class checkoutConfirmationPage {

    checkoutConfirmationPageLocators = {
        confirmOrderButton: "[title='Confirm Order']",
        breadcrumbs: '.breadcrumb > li',
        itemsInYourCart: '.confirm_products.table > tbody > tr',
        invoicePage: 'p:nth-of-type(3) > a'
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

    openInvoicePage(){
        cy.get(this.checkoutConfirmationPageLocators.invoicePage)
            .should('contain', 'invoice page')
            .click()
        

        cy.get('.contentpanel .table-responsive:nth-of-type(1) tr td').each(function($el, index, $list){
            let orderDetails

            if(index === 0){
                console.log($el.text())
                console.log($el.find('b:nth-of-type(1)').text().trim())
                // console.log($el.find('b:nth-of-type(1)').next().text())


                let orderId = $el.text().substring($el.text().search('#') + 1, $el.text().search('Status') - 1).trim()
                
                let status = $el.text().substring($el.text().search('Status') + 6, $el.text().search('E-Mail') - 1).trim()
                
                let email = $el.text().substring($el.text().search('E-Mail') + 6, $el.text().search('Shipping Method') - 1).trim()

                let shippingMethod = $el.text().substring($el.text().search('Shipping Method') + 15, $el.text().search('Payment Method') - 1).trim()

                let paymentMetdod = $el.text().substring($el.text().search('Payment Method') + 14).trim()
                cy.log(orderId)
                cy.log(status)
                cy.log(email)
                cy.log(shippingMethod)
                cy.log(paymentMetdod)
                
                orderDetails = {
                    orderId: orderId,
                    orderStatus: status,
                    orderEmail: email,
                    orderShippingMethod: shippingMethod,
                    orderPaymentMethod: paymentMetdod
                }

                cy.task('setOrderDetails', orderDetails)
            }
        })

        return this
    }

}

module.exports = new checkoutConfirmationPage()