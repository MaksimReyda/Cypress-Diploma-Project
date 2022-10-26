/// <reference types="cypress" />

class guestCheckoutStepOne {

    generateEmail(){
        let today = new Date()
        let time = today.getTime()
        let newEmail = `test${time}@mail.com`
        console.log(time)
        return newEmail
    }

    locators = {
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


    fillInCheckoutForm(){
        cy.get(this.locators.firstName).type('Test')
        cy.get(this.locators.lastName).type('User')
        cy.get(this.locators.email).type(this.generateEmail())


        cy.get(this.locators.address1).type('Test address')
        cy.get(this.locators.city).type('Lviv')
        cy.get(this.locators.region).select(1)
        cy.get(this.locators.zipCode).type('1234')

        // cy.get(this.locators.continueBtn).click()
        this.clickContinueButton()

    }

    clickContinueButton(){
        cy.get(this.locators.continueBtn).contains('Continue').click()
    }

    clickBackButton(){
        cy.get(this.locators.backButton).contains('Back').click()
    }


}

module.exports = new guestCheckoutStepOne()