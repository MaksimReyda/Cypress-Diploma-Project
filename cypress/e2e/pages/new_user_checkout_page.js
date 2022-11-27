/// <reference types="cypress" />

import {newUserData} from '../../fixtures/input_data'



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
        confirmPassword: 'input#AccountFrm_confirm',

        inputs: 'fieldset > .form-group',
        continueButton: "button[title='Continue']"
    }


    checkInputValidation(){
        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        cy.get(this.newUserCheckoutPageLocators.inputs).each(function($el, index, $list){
            if($el.find('.input-group-addon').children().hasClass('required')){
                console.log('Required field')

                cy.getTagName($el.find('.input-group').children()).then(function(tagName){
                    console.log(tagName)
                    if(tagName === 'INPUT' || tagName === 'SELECT'){

                        // if($el.hasClass('has-error')){

                            cy.getElementAttribute($el.find('input'), 'value').then(function(inputValue){
                                
                                
                                cy.getElementAttribute($el.find('input'), 'name').then(function(inputName){
                                    console.log(inputValue)
                                    console.log(inputName)

                                    cy.get($el.find('.help-block')).then(function(validationText){

                                        if(inputName === 'firstname' && inputValue.length < 3 || inputValue.length > 32){
                                            cy.wrap($el).should('have.class', 'has-error')
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.firstName)
                                        }
                                        else if(inputName === 'lastname' && inputValue.length < 3 || inputValue.length > 32){
                                            cy.wrap($el).should('have.class', 'has-error')
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.lastName)
                                        }
                                        else if(inputName === 'email' && !inputValue.match(emailFormat)){
                                            cy.wrap($el).should('have.class', 'has-error')
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.email)
                                        }
                                        else if(inputName === 'address_1' && inputValue.length < 3 || inputValue.length > 128){
                                            cy.wrap($el).should('have.class', 'has-error')
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.address1)
                                        }
                                        else if(inputName === 'city' && inputValue.length < 3 || inputValue.length > 128){
                                            cy.wrap($el).should('have.class', 'has-error')
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.city)
                                        }
                                        else if(inputName === 'zone_id' && $el.hasClass('has-error')){
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.state)
                                        }
                                        else if(inputName === 'postcode' && inputValue.length < 3 || inputValue.length > 10){
                                            cy.wrap($el).should('have.class', 'has-error')
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.zipCode)
                                        }
                                        else if(inputName === 'loginname' && inputValue.length < 5 ||  inputValue.length > 64){
                                            cy.wrap($el).should('have.class', 'has-error')
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.loginName)
                                        }
                                        else if(inputName === 'password' && inputValue.length < 4 || inputValue.length > 20){
                                            cy.wrap($el).should('have.class', 'has-error')
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.password)
                                        }
                                        else if(inputName === 'confirm' && inputValue.length < 4 || inputValue.length > 20){
                                            cy.wrap($el).should('have.class', 'has-error')
                                            expect(validationText.text().trim()).contains(newUserData.fieldsValidationMessages.password)
                                        }

                                    })

                                     
                                    
                                })

                            })

                        // }

                    } 
                    // else if(tagName === 'SELECT'){
                    
                    //     cy.get('select#AccountFrm_zone_id > option').each(function($el2, index2, $list2){
                    //         // console.log($el)
                    //         // console.log($el.text())
                    //         // console.log($list2)
                    //         cy.getElementAttribute($el2, 'selected').then(function(selected){
  
                    //             console.log(selected)

                    //         })
                    //     })
                    // }

                })


                // else if (index === 1){
                //     cy.getElementAttribute($el.find('input'), 'value').then(function(inputValue){
                        // cy.getElementAttribute($el.find('input'), 'name').then(function(name){
                        //     console.log(inputValue)
                        //     console.log(name)
                        // })
                        
                //     })
                // }
            }
        })

        return this
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

    fillEmailInput(isValid){
        if(isValid){
            cy.generateEmail().then(function(generatedEmail){
                cy.get('input#AccountFrm_email')
                    .click()
                    .clear()
                    .type(generatedEmail)
            })
        }
        else{
            cy.get('input#AccountFrm_email')
                .click()
                .clear()
                .type('@you.me.net')
        }

        
        return this
    }

    fillPhoneInput(phone){
        cy.get(this.newUserCheckoutPageLocators.phoneNumber)
            .click()
            .clear()
            .type(phone)
    
        return this
    }
    
    fillFaxInput(faxNumber){
        cy.get(this.newUserCheckoutPageLocators.faxNumber)
            .click()
            .clear()
            .type(faxNumber)

        return this
    }

    fillCompanyInput(company){
        cy.get(this.newUserCheckoutPageLocators.company)
            .click()
            .clear()
            .type(company)

        return this
    }

    fillAddress1Input(address1){
        cy.get(this.newUserCheckoutPageLocators.address1)
            .click()
            .clear()
            .type(address1)

        return this
    }

    fillAddress2Input(address2){
        cy.get(this.newUserCheckoutPageLocators.address2)
            .click()
            .clear()
            .type(address2)

        return this
    }

    fillCityInput(city){
        cy.get(this.newUserCheckoutPageLocators.city)
            .click()
            .clear()
            .type(city)

        return this
    }

    fillRegionSelect(region){
        cy.get(this.newUserCheckoutPageLocators.state)
            .select(region)       
        
        return this
    }

    fillZipCodeInput(zipCode){
        cy.get(this.newUserCheckoutPageLocators.zipCode)
            .click()
            .clear()
            .type(zipCode)

        return this
    }

    fillLoginNameInput(){

        return this
    }

    fillPasswordInput(password){
        cy.get(this.newUserCheckoutPageLocators.password)
            .click()
            .clear()
            .type(password)

        return this
    }

    fillConfirmPasswordInput(confirmPassword){
        let today = new Date()
        let time = today.getTime()
        cy.get(this.newUserCheckoutPageLocators.confirmPassword)
        .click()
        .clear()
        .type(`Maksym${time}`)

        return this
    }

    continueButtonClick(){
        cy.get(this.newUserCheckoutPageLocators.continueButton)
            .click()
            
        return this
    }

}

module.exports = new newUserCheckoutPage()