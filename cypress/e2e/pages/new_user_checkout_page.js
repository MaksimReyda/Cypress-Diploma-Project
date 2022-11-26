/// <reference types="cypress" />

class newUserCheckoutPage {
    newUserCheckoutPageLocators = {

        firstName: 'input#AccountFrm_firstname',
        lastName: 'input#AccountFrm_lastname',
        email: 'input#AccountFrm_email',
        phoneNumber: 'input#AccountFrm_telephone',
        faxNumber: 'input#AccountFrm_fax',

        company: 'input#AccountFrm_company',
        address1: "input[name='address_1']",
        address2: "input[name='address_2']",
        city: 'input#AccountFrm_city',
        state: 'select#AccountFrm_zone_id',
        zipCode: 'input#AccountFrm_postcode',

        loginName: 'input#AccountFrm_loginname',
        password: 'input#AccountFrm_password',
        confirmPassword: 'input#AccountFrm_confirm'
    }


    fillFirstNameInput(firstName){
        cy.get(this.newUserCheckoutPageLocators.firstName)
            .click()
            .clear()
            .type(firstName)
        

        console.log(this)
        return this
    }

    fillLastNameInput(lastName){
        cy.get(this.newUserCheckoutPageLocators.lastName)
            .click()
            .clear()
            .type(lastName)

        return this
    }
    
}

module.exports = new newUserCheckoutPage()