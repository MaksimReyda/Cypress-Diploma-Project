/// <reference types="cypress" />
import createAccountPage from "../e2e/pages/create_account.cy"
import guestCheckoutStepOne from "./pages/guest_checkout_step_1.cy"

const locators = {
    firstAddToChartButton: ".block_frame.block_frame_featured > div > div:nth-of-type(1) > .thumbnail > .jumbotron.pricetag > a[title='Add to Cart']",
    firstItemName: '.block_frame.block_frame_featured > div > div:nth-of-type(1) > .fixed_wrapper > .fixed',
    chart: '.topcart > li:nth-of-type(1)',
    itemNameformShoppingChartPage: '.cart-info.container-fluid.product-list > .table.table-bordered.table-striped > tbody > tr:nth-of-type(2) > td:nth-of-type(2)'
}

function additemToChart(itemLocator){
    // cy.get(itemLocator).click()

}

beforeEach(function(){
    cy.visit('https://automationteststore.com/')
})

describe('The Chart tests', function(){
    it('Positive scenarion of adding a new iten the chert from the main page', function(){
        let itemName
        let itemNameFromProductList
        cy.get(locators.firstAddToChartButton).click()

        console.log('-----------------')
        console.log(itemName)
        cy.get(locators.chart).trigger('mouseover')
        cy.get('.name').then(function(element){
            // let newString = element.text().replace(/[\r\n]/gm, '')
            let itemNameFromChart = element.text().trim()
            
            // console.log(element.text())

            // console.log(itemNameFromChart)

            cy.get(locators.firstItemName).then(function(element){
                // expect(element.text()).contains(name.text())
                itemNameFromProductList = element.text().trim()
                // console.log(itemNameFromChart)
                expect(itemNameFromChart).contains(itemNameFromProductList)
            })
            // console.log(itemNameFromProductList)
        })

        cy.get("a[title='View Cart']").click()

        cy.get('.maintext').then(function(element){
            expect(element.text()).contains('Shopping Cart')
        })


        cy.get(locators.itemNameformShoppingChartPage).then(function(element){
            expect(element.text().trim()).contains(itemNameFromProductList)
        })

        cy.get(".mb20.pull-right > a[title='Checkout']").click()

        cy.get('input#accountFrm_accountguest').check()
        cy.get("button[title='Continue']").click()

        // createAccountPage.createNewAccount()
        guestCheckoutStepOne.fillInCheckoutForm()

        

        // cy.get('.block_frame.block_frame_featured > div > div:nth-of-type(1)').then(function(element){
        //     console.log(element)
        //     console.log(Object.keys(element))
        //     console.log(element.context)
        //     console.log(typeof element[0])
        //     console.log(Object.keys(element[0]))
        // })
    })
})