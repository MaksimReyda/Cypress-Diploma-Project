/// <reference types="cypress" />
import {checkoutConfirmationData} from '../../fixtures/input_data'

class checkoutConfirmationPage {

    checkoutConfirmationPageLocators = {
        confirmOrderButton: "[title='Confirm Order']",
        breadcrumbs: '.breadcrumb > li'
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

}

module.exports = new checkoutConfirmationPage()