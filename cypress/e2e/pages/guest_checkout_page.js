/// <reference types="cypress" />
import {guestCheckoutPageData} from '../../fixtures/input_data'

class guestCheckoutPage {

    guestCheckoutPagelocators = {
        requiredFields: 'fieldset > div .input-group-addon',
        inputs: 'form#guestFrm > div > fieldset > div > .col-md-6.input-group',
        firstName: 'input#guestFrm_firstname',
        lastName: 'input#guestFrm_lastname',
        email: 'input#guestFrm_email',
        telephone: 'input#guestFrm_telephone',
        fax: 'input#guestFrm_fax',

        companyName: 'input#guestFrm_company',
        address1: "input[name='address_1']",
        address2: "input[name='address_2']",
        city: 'input#guestFrm_city',
        region: 'select#guestFrm_zone_id',
        zipCode: 'input#guestFrm_postcode',
        country: 'select#guestFrm_country_id',

        continueBtn: "button[title='Continue']",
        backButton: "a[title='Back']"
    }

    


    clickContinueButton(){
        cy.get(this.locators.continueBtn).contains('Continue').click()
        return this
    }

    clickBackButton(){
        cy.get(this.locators.backButton).contains('Back').click()
        return this
    }



    // fillInCheckoutForm(){
    //     cy.get(this.locators.firstName).type('Test')
    //     cy.get(this.locators.lastName).type('User')
    //     cy.get(this.locators.email).type(this.generateEmail())


    //     cy.get(this.locators.address1).type('Test address')
    //     cy.get(this.locators.city).type('Lviv')
    //     cy.get(this.locators.region).select(1)
    //     cy.get(this.locators.zipCode).type('1234')
    //     this.clickContinueButton()

    // }


}

module.exports = new guestCheckoutPage()