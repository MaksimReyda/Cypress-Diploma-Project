/// <reference types="cypress" />

// import {mainPageData} from '../../fixtures/input_data'

import mainShopPage from '../pages/main_page'

function getDataFromTopChart(){
    let chartData = []

    cy.get('#top_cart_product_list > div > table > tbody > tr').each(function($el, index, $list){
        // console.log($el.text())
        cy.get($el.find('.name')).then(function(name){

            cy.get($el.find('.total')).then(function(total){

                cy.get($el.find('.quantity')).then(function(quantity){
                    chartData.push({
                        name: name.text().trim(),
                        total: total.text().trim(),
                        quantity: quantity.text().trim()
                    })
                })
            })
            
        })
        
    })
    return chartData
}


class shoppingChartPage {
    shoppingChartPageLocators = {
        viewChart: "a[title='View Cart']",
        productListTable: '.product-list tbody > tr',
        procuctName: '.product-list > .table-striped > tbody > tr > td:nth-of-type(2)'
    }

    visitPage(){
        cy.visit('https://automationteststore.com/')
        return this
    }


    viewChart(){
        let topChart
        let tableData = []
        if(mainShopPage.checkIsChartEmpty()){
            mainShopPage.addProductToChart()
            cy.get('.nav.pull-left.topcart > .dropdown').trigger('mousemove')
            
            cy.get(this.shoppingChartPageLocators.viewChart).click({force: true})
            cy.url().should('eq', "https://automationteststore.com/index.php?rt=checkout/cart")

            cy.get(this.shoppingChartPageLocators.productListTable).each(function($el, index, $list){
                // console.log($list.length)
                console.log(index)
                if(index !== 0){
                    console.log('++++')
                    cy.get($el.find('td:nth-of-type(2)')).then(function(productName){
                        console.log(productName.text().trim())
                        cy.get($el.find('td:nth-of-type(4)')).then(function(price){
                            cy.get($el.find('td:nth-of-type(5) .form-control')).invoke('val').then(function(quantity){
                                console.log(quantity)
                                tableData.push({
                                    name: productName.text().trim(),
                                    price: price.text().trim(),
                                    quantity: quantity
                                })
                            })
                        })
                        
                    })
                    console.log(tableData)
                }
            
                topChart = getDataFromTopChart()
            }).then(function(){
                tableData.forEach(function(tableDataItem){
                    topChart.forEach(function(topChartItem){
                        expect(tableDataItem.name).contains(topChartItem.name)
                        expect(tableDataItem.price).contains(topChartItem.total)
                        expect(tableDataItem.quantity).contains(topChartItem.quantity)
                        
                    })
                })

            })

        }else{
            // cy.get(this.shoppingChartPageLocators.viewChart).click()
            // cy.url().should('eq', "https://automationteststore.com/index.php?rt=checkout/cart")
        }

        return this
    }

    

}  

module.exports = new shoppingChartPage()