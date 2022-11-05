// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('isCartTableEmpty', function(){
    cy.get('body').then(function($body){
        if($body.find('#cart').length === 0){
            console.log('CART table IS EMPTY')
            return true
        } else{
            console.log('CART table IS NOT EMPTY')
            cy.get('body').find('#cart').then(function(cart){
                console.log(cart)
            })
            return false
        }
    })
})


Cypress.Commands.add('AddProductToCart', function (productIndex) {
    cy.visit('https://automationteststore.com/')

    let productsData = []
    cy.get('.block_frame > div > div .thumbnail').each(function ($el, index, $list) {

        if (!$el.find('.pricetag').children().hasClass('nostock') && index === productIndex) {


            cy.get($el.prev().children()).then(function (productName) {

                if ($el.find('.price').children().hasClass('pricenew')) {
                    cy.get($el.find('.pricenew')).then(function (pricenew) {
                        productsData.push({
                            name: productName.text().trim(),
                            price: pricenew.text().trim(),
                            quantity: '1'
                        })
                    })
                } else {
                    cy.get($el.find('.price').children()).then(function (price) {
                        // prices.push(price.text().trim())
                        productsData.push({
                            name: productName.text().trim(),
                            price: price.text().trim(),
                            quantity: '1'
                        })

                    })
                }

            })

            cy.get($el.find('.productcart')).click()
            cy.url().should('eq', 'https://automationteststore.com/')
        }

    })
    // .then(function () {

    //     let chartData = []

    //     cy.get('#top_cart_product_list > div > table > tbody > tr').each(function ($el, index, $list) {
    //         console.log($el.text())
    //         cy.get($el.find('.name')).then(function (name) {

    //             cy.get($el.find('.total')).then(function (total) {

    //                 cy.get($el.find('.quantity')).then(function (quantity) {
    //                     chartData.push({
    //                         name: name.text().trim(),
    //                         total: total.text().trim(),
    //                         quantity: quantity.text().trim()
    //                     })
    //                 })
    //             })

    //         })
    //     }).then(function () {
    //         // console.log(chartData)
    //         console.log(typeof productsData)
    //         console.log(chartData)

    //         productsData.forEach(function (item) {
    //             chartData.forEach(function (chartItem) {
    //                 expect(item.name).contain(chartItem.name)
    //                 expect(item.price).contains(chartItem.total)
    //                 expect(item.quantity).contains(chartItem.quantity)
    //             })

    //             // console.log(item)
    //         })

    //     })

    // })

    // return this
})
