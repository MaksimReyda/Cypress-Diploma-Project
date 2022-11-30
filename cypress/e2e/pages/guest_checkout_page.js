/// <reference types="cypress" />

import {guestCheckoutPageData} from '../../fixtures/input_data'

class guestCheckoutPage {

    guestCheckoutPagelocators = {
        requiredFields: 'fieldset > div .input-group-addon',
        inputs: 'form#guestFrm > div > fieldset > div > .col-md-6.input-group',
        guestCheckoutRadioButton: 'form#accountFrm > fieldset > div:nth-of-type(2) > label',
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
        backButton: "a[title='Back']",
        confirmButton: "[title='Confirm Order']"
    }

    visitGuestCheckoutPage(){
        cy.get('https://automationteststore.com/index.php?rt=account/login')
        cy.get('.maintext').then(function(title){
            expect(title).contains('Account Login')
        })
        return this
    }


    selectGuestCheckoutRadioButton(){
        cy.get(this.guestCheckoutPagelocators.guestCheckoutRadioButton).click()
        return this
    }


    checkOrderSummary(){
        cy.getDataFromTopCart().then(function(topCartData){
            let orderSummaryData = []
            cy.get('.sidewidt > table:nth-of-type(1) > tbody > tr').each(function($el, index, $list){
                // cy.get($el)
                console.log($el.text())
                cy.get($el.find('.valign_top').find('a')).then(function(productName){
                    console.log(productName.text().trim())
                    cy.get($el.find('.valign_top').find('b')).then(function(productPrice){

                        cy.get($el.find('.valign_top')).then(function(quantity){

                            let newString = quantity.text().charAt(0)

                            orderSummaryData.push({
                                name: productName.text().trim(),
                                price: productPrice.text().trim(),
                                quantity: newString
                            })

                        })
                    })
                })

            }).then(function(){
                console.log(orderSummaryData)
                for(let i = 0; i < orderSummaryData.length; i++){
                    expect(orderSummaryData[i].name).contains(topCartData[i].name)
                    expect(orderSummaryData[i].price).contains(topCartData[i].price)
                    expect(orderSummaryData[i].quantity).contains(topCartData[i].quantity)
                }
            })
        })
        return this
    }

    

    checkInputsValidation(){

        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        let inputsData = []

        let firstNameInput = {}, lastNameInput = {}, emailInput = {}, address1Input = {}, cityInput = {}, regionSelect = {}, zipCodeInput = {}

        cy.get('#guestFrm > div > fieldset > .form-group').each(function($el, index, $list){

            if($el.find('.input-group-addon').children().hasClass('required')){

                cy.get($el.find('.help-block')).then(function(validationText){

                    cy.getElementAttribute($el.find('.input-group').children(), 'name').then(function(inputName){
                        
                        cy.getElementAttribute($el.find('.input-group').children(), 'value').then(function(inputValue){

                            if(inputName === 'firstname'){

                                inputsData.push({
                                    name: inputName,
                                    value: inputValue,
                                    error: validationText.text().trim()
                                })

                            }
                            else if(inputName === 'lastname'){

                                inputsData.push({
                                    name: inputName,
                                    value: inputValue,
                                    error: validationText.text().trim()
                                })

                            }
                            else if(inputName === 'email'){

                                inputsData.push({
                                    name: inputName,
                                    value: inputValue,
                                    error: validationText.text().trim()
                                })

                            }
                            else if(inputName === 'address_1'){

                                inputsData.push({
                                    name: inputName,
                                    value: inputValue,
                                    error: validationText.text().trim()
                                })

                            }
                            else if(inputName === 'city'){

                                inputsData.push({
                                    name: inputName,
                                    value: inputValue,
                                    error: validationText.text().trim()
                                })

                            }
                            else if(inputName === 'postcode'){

                                inputsData.push({
                                    name: inputName,
                                    value: inputValue,
                                    error: validationText.text().trim()
                                })

                            }

                        })

                    })

                })

            }

        }).then(function(){

            console.log(inputsData)

            for(let i = 0; i < inputsData.length; i++){

                if(inputsData[i].name === 'firstname' && inputsData[i].value.length < 3 || inputsData[i].name === 'firstname' && inputsData[i].value.length > 32){
                    expect(inputsData[i].error).contains(guestCheckoutPageData.fieldsValidationMessages.firstName)
                }
                else if(inputsData[i].name === 'lastname' && inputsData[i].value.length < 3 || inputsData[i].name === 'lastname' && inputsData[i].value.length > 32){
                    expect(inputsData[i].error).contains(guestCheckoutPageData.fieldsValidationMessages.lastName)
                }
                else if(inputsData[i].name === 'email' && inputsData[i].value.length < 3 || inputsData[i].name === 'email' && inputsData[i].value === guestCheckoutPageData.invalidEmail){
                    expect(inputsData[i].error).contains(guestCheckoutPageData.fieldsValidationMessages.email)
                }
                else if(inputsData[i].name === 'address_1' && inputsData[i].value.length < 3 || inputsData[i].name === 'address_1' && inputsData[i].value.length > 128){
                    expect(inputsData[i].error).contains(guestCheckoutPageData.fieldsValidationMessages.address1)
                }
                else if(inputsData[i].name === 'city' && inputsData[i].value.length < 3 || inputsData[i].name === 'city' && inputsData[i].value.length > 128){
                    expect(inputsData[i].error).contains(guestCheckoutPageData.fieldsValidationMessages.city)
                }
                else if(inputsData[i].name === 'postcode' && inputsData[i].value.length < 3 || inputsData[i].name === 'postcode' && inputsData[i].value.length > 10){
                    expect(inputsData[i].error).contains(guestCheckoutPageData.fieldsValidationMessages.zipCode)
                }

            }

        })

        return this
    }

    getTagName(){
        cy.get('input#guestFrm_firstname').then(function(element){
            // console.log(element.tagName)
            console.log(element.prop('nodeName'))
        })

        cy.get('#guestFrm_zone_id').then(function(element){
            // console.log(element.tagName)
            console.log(element.prop('tagName'))
        })

        return this
    }

    openShippingAddressBlock(){
        cy.get('.checkbox').click()
        return this
    }


    clickContinueButton(){
        cy.get(this.guestCheckoutPagelocators.continueBtn).contains('Continue').click()
        return this
    }

    clickBackButton(){
        cy.get(this.guestCheckoutPagelocators.backButton).contains('Back').click()
        return this
    }

    clickConfirmOrderButton(){
        cy.get(this.guestCheckoutPagelocators.confirmButton)
            .contains('Confirm Order')
            .click()

        return this
    }

    fillFirstNameInput(firstName){
        cy.get(this.guestCheckoutPagelocators.firstName)
            .click()
            .clear()
            .type(firstName)
        
        return this
    }


    fillLastNameInput(lastName){
        cy.get(this.guestCheckoutPagelocators.lastName)
            .click()
            .clear()
            .type(lastName)
        
        return this
    }


    fillEmailInput(isValid){
        if(isValid){
            cy.generateEmail().then(function(generatedEmail){
                cy.get('input#guestFrm_email')
                .click()
                .clear()
                .type(generatedEmail)
            })
        }
        else{
            cy.get('input#guestFrm_email')
            .click()
            .clear()
            .type(guestCheckoutPageData.invalidEmail)
        }        
        
        return this
    }


    fillAddress1Input(address1){
        cy.get(this.guestCheckoutPagelocators.address1)
            .click()
            .clear()
            .type(address1)
        
        return this
    }


    fillCityInput(city){
        cy.get(this.guestCheckoutPagelocators.city)
            .click()
            .clear()
            .type(city)
        
        return this
    }

    fillRegionSelect(region){
        cy.get(this.guestCheckoutPagelocators.region)
            .select(region)       
        return this
    }


    fillZipCodeInput(zipCode){
        cy.get(this.guestCheckoutPagelocators.zipCode)
            .click()
            .clear()
            .type(zipCode)
        
        return this
    }




    checkInputsValidationDontUSE(){
        //form#guestFrm > div > fieldset > .form-group

        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        let firstNameInput = {}, lastNameInput = {}, emailInput = {}, address1c = {}, city = {}, regionSelect = {}, zipCodeInput = {}
        

        // cy.isShippingDetailsVisable().then(function(isShipDetailsVisable){


            // if(isShipDetailsVisable === true){
            //     cy.get('fieldset > .form-group').each(function($el, index, $list){
            //         // Find required fields
            //         if($el.find('.input-group-addon').children().hasClass('required')){
            //             console.log('Find required')

            //             cy.wrap($el).find('.input-group').children().first().invoke('attr', 'name').then(function(attributeName){
            //                 // console.log(attributeName)
            //                 cy.get($el.find('.help-block')).then(function(validationText){
                               
            //                     if(attributeName === 'firstname' || attributeName === 'shipping_firstname'){
            //                         expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.firstName)
                                    
            //                     } else if(attributeName === 'lastname' || attributeName === 'shipping_lastname'){
            //                         expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.lastName)
            //                     } else if(attributeName === 'email'){
            //                         expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.email)
            //                     } else if(attributeName === 'address_1' || attributeName === 'shipping_address_1'){
            //                         expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.address1)
            //                     } else if(attributeName === 'city' || attributeName === 'shipping_city'){
            //                         expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.city)
            //                     } else if(attributeName === 'guestFrm_zone_id' || attributeName === 'guestFrm_shipping_zone_id'){
            //                         expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.state)
            //                     } else if(attributeName === 'postcode' || attributeName === 'shipping_postcode'){
            //                         expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.zipCode)
            //                     }
            //                 })
            //             })
            //         }
            //     })
            // } 
            // else{
                cy.get('#guestFrm > div > fieldset > .form-group').each(function($el, index, $list){


                    if($el.find('.input-group-addon').children().hasClass('required')){

                        cy.getElementAttribute($el.find('.input-group').children(), 'value').then(function(inputValue){

                            cy.getElementAttribute($el.find('.input-group').children(), 'name').then(function(inputName){

                                console.log(inputName)
                                console.log(inputValue)
                                console.log(inputValue.length)

                                cy.get($el.find('.help-block')).then(function(validationText){


                                    if(inputName === 'firstname'){
                                        firstNameInput.name = inputName
                                        firstNameInput.value = inputValue
                                        firstNameInput.error = validationText.text().trim()
                                    }
                                    else if(inputName === 'lastname'){
                                        lastNameInput.name = inputName
                                        lastNameInput.value = inputValue
                                        lastNameInput.error = validationText.text().trim()
                                    }


                                }).then(function(){

                                    console.log(firstNameInput)
                                    console.log(lastNameInput)

                                    if(firstNameInput.name === 'firstname' && firstNameInput.value.length < 3 || firstNameInput.value.length > 32){
                                        // cy.wrap($el).should('have.class', 'has-error')
                                        expect(firstNameInput.error).contains(guestCheckoutPageData.fieldsValidationMessages.firstName)
                                    }
                                    else if(lastNameInput.name === 'lastname' && lastNameInput.value.length < 3 || lastNameInput.value.length > 32){
                                        // cy.wrap($el).should('have.class', 'has-error')
                                        expect(lastNameInput.error).contains(guestCheckoutPageData.fieldsValidationMessages.lastName)
                                    }
                                    // else if(inputName === 'email' && !inputValue.match(emailFormat)){
                                    //     cy.wrap($el).should('have.class', 'has-error')
                                    //     expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.email)
                                    // }
                                    // else if(inputName === 'address_1' && inputValue.length < 3 || inputValue.length > 128){
                                    //     cy.wrap($el).should('have.class', 'has-error')
                                    //     expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.address1)
                                    // }
                                    // else if(inputName === 'city' && inputValue.length < 3 || inputValue.length > 128){
                                    //     cy.wrap($el).should('have.class', 'has-error')
                                    //     expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.city)
                                    // }
                                    // // else if(inputName === 'zone_id' && $el.parent().find('div:nth-of-type(2) > fieldset > div:nth-of-type(5)').hasClass('has-error')){
                                    // //     expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.state)
                                    // // }
                                    // else if(inputName === 'postcode' && inputValue.length < 3 || inputValue.length > 10){
                                    //     cy.wrap($el).should('have.class', 'has-error')
                                    //     expect(validationText.text()).contains(guestCheckoutPageData.fieldsValidationMessages.zipCode)
                                    // }
                                })
                            })
                        })

                    }


                })
            // }
        // })



        // cy.isShippingDetailsVisable(function(isVisible){
        //     console.log(isVisible)
        // })
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