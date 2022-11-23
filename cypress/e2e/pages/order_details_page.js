

class orderDetailsPage {

    orderDetailsPageLocators = {
        orderId: 'input#CheckOrderFrm_order_id',
        email: 'input#CheckOrderFrm_email',
        continueButton: "button[title='Continue']"
    }

    openOrderDetailsPage(){
        cy.get('#main_menu_top  .menu_account.top > .menu_text').trigger('mouseover')
        cy.get('#main_menu_top  .dropdown-menu.sub_menu  .menu_order.sub')
            .should('contain', 'Check Your Order')
            .click()

        return this
    }

    checkOrderDetails(){

        cy.task('getOrderDetails').then(function(orderDetails){
            console.log(orderDetails)


        })

        return this
    }

    checkFormValidation(){
        // cy.isOrderDetailsFormVisible().then(function(){

        // })
        
        cy.isOrderDetailsFormVisible().then(function(isVisible){
            if(isVisible){
                cy.get('form#CheckOrderFrm > .form-horizontal.registerbox > fieldset > .form-group').each(function($el, index, $list){
                    if($el.hasClass('has-error')){
                        // #CheckOrderFrm .input-group input
                        cy.getElementAttribute($el.find('input'), 'name').then(function(attributeName){
                            
                            console.log(attributeName)
                            cy.get('div > .help-block').then(function(errorMessage){
                                if(attributeName === 'order_id'){
                                    expect(errorMessage.text().trim()).contains('Order ID is required field!')
                                } else if(attributeName === 'email'){
                                    expect(errorMessage.text().trim()).contains('E-Mail Address does not appear to be valid!')
                                }
                            })

                        })

                        // cy.get($el.find('input')).invoke('attr', 'name').then(function(attributeName){
                        //     console.log(attributeName)
                        // })

                        // cy.get('#CheckOrderFrm .input-group input').invoke('attr', 'name').then(function(attributeName){
                        //     console.log(attributeName)
                        // })
                    }
                })
            }
        })
    }


    fillOrderIdInput(){
        cy.task('getOrderDetails').then(function(orderDetails){
            console.log(orderDetails)

            cy.get('input#CheckOrderFrm_order_id')
                .click()
                .clear()
                .type(orderDetails.orderId)

        })

        return this
    }


    fillEmailInput(){
        cy.task('getOrderDetails').then(function(orderDetails){
            console.log(orderDetails)

            cy.get('input#CheckOrderFrm_email')
                .click()
                .clear()
                .type(orderDetails.orderEmail)

        })

        return this
    }


    clickContinueButton(){
        cy.get(this.orderDetailsPageLocators.continueButton)
            .should('contain', 'Continue')
            .click()
        
        return this
    }
    
}

module.exports = new orderDetailsPage()