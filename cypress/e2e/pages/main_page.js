/// <reference types="cypress" />
import {mainPageData} from '../../fixtures/input_data'
// import topCategotyMenuComponent from '../shared_components/category_menu'

class mainShopPage {

    mainShopPageLocators = {
        bunner: {
            slide1: 'div:nth-of-type(1) > .animate0',
            slide2: 'div:nth-of-type(2) > .animate0',
            slide3: 'div:nth-of-type(3) > .animate0'
        },
        // categories: 'ul.categorymenu > li > a',
        categories: 'ul.categorymenu > li:nth-child(n + 2) > a',
        subcategories: '.subcategories > ul > li > a',
        carrencies: {
            euro: '.currency.dropdown-menu > li:nth-of-type(1) > a',
            sterling: '.currency.dropdown-menu > li:nth-of-type(2) > a',
            dollar: '.currency.dropdown-menu > li:nth-of-type(3) > a',
            current: '.language.nav.pull-left  .dropdown-toggle > span'
        },
        featuredProducts: [
            { title: "a[title='Skinsheen Bronzer Stick']", price: ".block_frame.block_frame_featured > .list-inline.thumbnails > div:nth-of-type(1) > .thumbnail > .jumbotron.pricetag > .price > .oneprice", chartBtn: ".block_frame.block_frame_featured > div > div:nth-of-type(1) > .thumbnail > .jumbotron.pricetag > a[title='Add to Cart']" },
            { title: ".block_frame.block_frame_featured a[title='BeneFit Girl Meets Pearl']", price: ".block_frame.block_frame_featured > .list-inline.thumbnails .pricenew", chartBtn: ".block_frame.block_frame_featured .nostock" },
            { title: ".block_frame_featured [title='Benefit Bella Bamba']", price: ".block_frame_featured [class='col-md-3 col-sm-6 col-xs-12']:nth-of-type(3) .oneprice", chartBtn: ".block_frame_featured [class='col-md-3 col-sm-6 col-xs-12']:nth-of-type(3) [title='Add to Cart']" },
            { title: "a[title='Tropiques Minerale Loose Bronzer']", price: ".block_frame_featured [class='col-md-3 col-sm-6 col-xs-12']:nth-of-type(4) .oneprice", chartBtn: ".block_frame_featured [class='col-md-3 col-sm-6 col-xs-12']:nth-of-type(4) [title='Add to Cart']" }
        ]
    }

    visitMainPage(){
        cy.visit('https://automationteststore.com/')
        return this
    }

    changeCurrency(currency){
        cy.get('.language.nav.pull-left  .dropdown-toggle').trigger('mouseover')
        if(currency === 'Euro'){
            cy.get(this.mainShopPageLocators.carrencies.euro).click()
            cy.get(this.mainShopPageLocators.carrencies.current).should('contain', 'Euro')
        } else if(currency === 'Sterling'){
            cy.get(this.mainShopPageLocators.carrencies.sterling).click()
            cy.get(this.mainShopPageLocators.carrencies.current).should('contain', 'Pound Sterling')
        } else if(currency === 'Dollar'){
            cy.get(this.mainShopPageLocators.carrencies.dollar).click()
            cy.get(this.mainShopPageLocators.carrencies.current).should('contain', 'US Dollar')
        }
        return this
    }

    getCurrency(){
        let currencyTitle
        cy.get(this.mainShopPageLocators.carrencies.current).then(function(title){
            currencyTitle = title.text().trim()
            console.log(currencyTitle)
            // return title.text().trim()

        })
        return currencyTitle
    }

    checkPrice(){

        let prices = []
        let oldPrices = []
        let newPrices = []
        let currentCurrencyTitle
        // let test = this.getCurrency() //UNDEFINED

        cy.get('#featured .price').each(function($el, index, $list){

            if(!$el.wrap().children().hasClass('pricenew')){
                console.log('-------------------')
                prices.push($el.text().trim())
            } else{
                // oldPrices.push($el.text().trim())

                cy.get('#featured .price .pricenew').then(function(newPrice){
                    newPrices.push(newPrice.text().trim())
                })

                cy.get('#featured .price .priceold').then(function(oldPrice){
                    oldPrices.push(oldPrice.text().trim())
                })
            }
            // mainPageData.featuredProducts.content.forEach(function(contentElement){
            //     // console.log(contentElement)
            //     contentElement.price.forEach(function(value){
            //         console.log(value.value)
            //     })
            // })
    
            console.log($el.text())
            // prices.push($el.text().trim())
        }).then(function(){
            console.log(prices)

            
            cy.get('.language.nav.pull-left  .dropdown-toggle > span').then(function(title){
                currentCurrencyTitle = title.text().trim()

                console.log(currentCurrencyTitle)
                mainPageData.featuredProducts.content.forEach(function(contentElement){

                    if(currentCurrencyTitle === '$ US Dollar'){
                        contentElement.discountPrice.forEach(function(discountPriceValue){
                            if(discountPriceValue.currency === '$ US Dollar' && contentElement.discount){
                                expect(newPrices).contains(discountPriceValue.value)
                            }
                        })
        
                        contentElement.price.forEach(function(priceValue){
                            if(priceValue.currency === '$ US Dollar' && contentElement.discount === false){
                                expect(prices).contains(priceValue.value)
                            } else if(priceValue.currency === '$ US Dollar' && contentElement.discount){
                                expect(oldPrices).contains(priceValue.value)
                                // expect()
                            }                    
                        })
                    } else if(currentCurrencyTitle === '€ Euro'){
                        contentElement.discountPrice.forEach(function(discountPriceValue){
                            if(discountPriceValue.currency === '€ Euro' && contentElement.discount){
                                expect(newPrices).contains(discountPriceValue.value)
                            }
                        })
        
                        contentElement.price.forEach(function(priceValue){
                            if(priceValue.currency === '€ Euro' && contentElement.discount === false){
                                expect(prices).contains(priceValue.value)
                            } else if(priceValue.currency === '€ Euro' && contentElement.discount){
                                expect(oldPrices).contains(priceValue.value)
                                // expect()
                            }                    
                        })
                    } else if(currentCurrencyTitle === '£ Pound Sterling'){
                        contentElement.discountPrice.forEach(function(discountPriceValue){
                            if(discountPriceValue.currency === '£ Pound Sterling' && contentElement.discount){
                                expect(newPrices).contains(discountPriceValue.value)
                            }
                        })
        
                        contentElement.price.forEach(function(priceValue){
                            if(priceValue.currency === '£ Pound Sterling' && contentElement.discount === false){
                                expect(prices).contains(priceValue.value)
                            } else if(priceValue.currency === '£ Pound Sterling' && contentElement.discount){
                                expect(oldPrices).contains(priceValue.value)
                                // expect()
                            }                    
                        })
                    }          

                })

            })

            console.log(currentCurrencyTitle)
            

        })

        return this

    }


    checkSlide(sliderLocator, text){
        cy.get(sliderLocator).then(function(slideText){
            // console.log(slideText.text().trim())
            expect(slideText.text().trim()).contains(text)
        })
        return this
    }

    checkCategories(){
        cy.get(this.mainShopPageLocators.categories).each(function($el, index, $list){
            expect($el.text().trim()).contains(mainPageData.categories[index].name)
        })
        return this
    }

    checkSubcategories(){
        cy.get(this.mainShopPageLocators.subcategories).each(function($el, index, $list){
            
            let arr = []

            mainPageData.categories.forEach(function(categories){
                // console.log(test)
                categories.subcategories.forEach(function(subcategories){
                    arr.push(subcategories.name)
                })
            
            })

            console.log(arr)
            expect($el.text().trim()).contains(arr[index])
            
        })
        return this
    }

    // test(){

    //     mainPageData.categories.forEach(function(test){
    //         console.log(test)
    //         test.subcategories.forEach(function(categories){
    //             cy.log(categories.name)
    //         })
        
    //     })
    // }

    checkProductTitle(titleLocatort, titleName){
        cy.get(titleLocatort).then(function(titleText){
            expect(titleText.text().trim()).contains(titleName)
        })
        return this
    }

    checkIsProductOnStock(addToChartBtnLocator, isOnStock){
        if(isOnStock){
            cy.get(addToChartBtnLocator).should('be.visible').and('have.text', 'Add to Cart')
        } else{
            cy.get(addToChartBtnLocator).should('have.class', 'nostock').and('contain', 'Out of Stock')
        }
        
        return this
    }

    checkSectionProducts(sectionName){
        if(sectionName === 'Featured'){
            cy.get('#featured .fixed_wrapper a').each( function($el, index, $list) {
                expect($el.text()).contains(mainPageData.featuredProducts.content[index].name)
            })
        } else if(sectionName === 'Latest Products'){
            cy.get('#latest .fixed_wrapper a').each( function($el, index, $list) {
                expect($el.text()).contains(mainPageData.latestProducts.content[index].name)
            })
        } else if(sectionName === 'Bestsellers'){
            cy.get('#bestseller .fixed_wrapper a').each( function($el, index, $list) {
                expect($el.text()).contains(mainPageData.bestsellersProducts.content[index].name)
            })
        } else if(sectionName === 'Specials'){
            cy.get('#special .fixed_wrapper a').each( function($el, index, $list) {
                expect($el.text()).contains(mainPageData.specialsProducts.content[index].name)
            })
        }

        // cy.get('.fixed_wrapper a').each( function($el, index, $list) {
        //     console.log($el.text())
        //     if(sectionName === 'Featured'){
        //         expect($el.text()).contains(mainPageData.featuredProducts.content[index].name)
        //     } else if(sectionName === 'Latest Products'){
        //         expect($el.text()).contains(mainPageData.latestProducts.content[index].name)
        //     }
        // })


        return this
    }

    checkPromoSection(){
        cy.get('.promo_text h2').each(function($el, index, $list){
            expect($el.text().trim()).contains(mainPageData.promoSection.content[index].title)
        })

        cy.get('.promo_text').each(function($el, index, $list){
            expect($el.text().trim()).contains(mainPageData.promoSection.content[index].description)
        })

        return this
    }

    // checkAllProducts(){

    // }

    checkProductPrice(priceLocator, expectedPtice){
        cy.get(priceLocator).then(function(price){
            expect(price.text().trim()).contains(expectedPtice)
        })
        return this
    }

    // checkfeaturedProducts(){

    // }

    moveSlide(){
        cy.get('.nextArrow').click({force: true})
        return this
    }
}

module.exports = new mainShopPage()