/// <reference types="cypress" />

// import {mainPageData} from '../../fixtures/input_data'

// import { debounce } from 'cypress/types/lodash'
import mainShopPage from '../pages/main_page'

// function getDataFromTopChart(){
//     let chartData = []

//     cy.get('#top_cart_product_list > div > table > tbody > tr').each(function($el, index, $list){
//         // console.log($el.text())
//         cy.get($el.find('.name')).then(function(name){

//             cy.get($el.find('.total')).then(function(total){

//                 cy.get($el.find('.quantity')).then(function(quantity){
//                     chartData.push({
//                         name: name.text().trim(),
//                         total: total.text().trim(),
//                         quantity: quantity.text().trim()
//                     })
//                 })
//             })
            
//         })
        
//     })
//     return chartData
// }

// function isCartTableEmptyTEST(){
//     cy.get('body').then(function($body){
//         if($body.find('#cart').length === 0){
//             // console.log('CART table IS EMPTY')
//             return '+++++++++'
//         } else{
//             console.log('CART table IS NOT EMPTY')
//             cy.get('body').find('#cart').then(function(cart){
//                 console.log(cart)
//             })
//             return false
//         }
//     })
// }

// function isTopCartEmpty(){
//     cy.get('body').then(function(body){
//         if(body.find('#top_cart_product_list > .empty_cart')){
//             console.log('TOP cart is empty')
//             return true
//         } else{
//             console.log('TOP cart is NOT empty')
//             return false
//         }
//     })
// }

// function getDataFromCartTable(){
//     let tableData = []
//     cy.get('.product-list tbody > tr').each(function($el, index, $list){
//         if(index !== 0){
//             console.log('++++')
//             cy.get($el.find('td:nth-of-type(2)')).then(function(productName){
//                 cy.get($el.find('td:nth-of-type(4)')).then(function(price){
//                     cy.get($el.find('td:nth-of-type(5) .form-control')).invoke('val').then(function(quantity){
//                         console.log(quantity)
//                         tableData.push({
//                             name: productName.text().trim(),
//                             price: price.text().trim(),
//                             quantity: quantity
//                         })
//                     })
//                 })
                
//             })
//             console.log(tableData)
//         }
//     })
//     return tableData
// }

class shoppingCartPage {
    shoppingChartPageLocators = {
        viewChart: "a[title='View Cart']",
        productListTable: '.product-list tbody > tr',
        productName: '.product-list > .table-striped > tbody > tr > td:nth-of-type(2)'
    }

    visitPage(){
        // cy.visit('https://automationteststore.com/')
        cy.visit('https://automationteststore.com/index.php?rt=checkout/cart')
        return this
    }


    checkCartTable(){

        cy.isCartTableEmpty().then(function(isTableEmpty){
            cy.isTopCartEmpty().then(function(isTopCartEmpty){

                if(isTableEmpty && isTopCartEmpty){
                    console.log('----------------------')
                    cy.get('.contentpanel').then(function(message){
                        console.log(message.text())
                        expect(message.text().trim()).contains('Your shopping cart is empty!')
                    })
        
                    cy.get('#top_cart_product_list > div > table').should('not.exist')
        
                } else{
                    cy.getDataFromCartTable().then(function(cartTableData){
                        
                        cy.getDataFromTopCart().then(function(topCartData){

                            for(let i = 0; i < cartTableData.length; i++){
                                expect(cartTableData[i].name).contains(topCartData[i].name)
                                expect(cartTableData[i].price).contains(topCartData[i].price)
                                expect(cartTableData[i].quantity).contains(topCartData[i].quantity)
                            }

                        })
                    })
                }
            })

        })

        // cy.get('.contentpanel').then(function(message){
        //     console.log(message.text())
        //     expect(message.text().trim()).contains('Your shopping cart is empty!')
        // })
        

        return this

    }


    viewCart(){
        let topChart
        let tableData = []
        if(mainShopPage.checkIsTopCartEmpty()){
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


    removeItemFromCart(){
        let dataFromCartTable
        // cy.AddProductToCart(0)
        // cy.AddProductToCart(5)

        

        cy.get('.contentpanel').then(function(element){
            console.log(element.text())
            isTopCartEmpty()
        })

        if(isCartEmpty()){
            
            // cy.AddProductToCart([0, 5])

            // cy.get('.contentpanel').then(function(element){
            //     console.log(element.text())
            //     expect(element.text().trim()).contains('Your shopping cart is empty!')
            // })


            // cy.get('.cart-info.container-fluid.product-list').then(function(){
            //     dataFromCartTable = getDataFromCartTable()
            // }).then(function(){
            //     // console.log(dataFromCartTable)
            //     // dataFromCartTable.forEach(function(item){
            //     //     console.log(item.price)
            //     // })
            //     if(dataFromCartTable.length === 1){
                    
            //     }
            // })
            console.log('Cart is empty')
        } else{
            
            // cy.get(`${this.shoppingChartPageLocators.productListTable} > td:nth-of-type(7) > a`).click()
        }

        return this
    }

    

}  

module.exports = new shoppingCartPage()
