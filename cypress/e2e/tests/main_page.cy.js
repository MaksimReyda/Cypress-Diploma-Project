/// <reference types="cypress" />

import mainPage from '../pages/main_page'
import {mainPageData} from '../../fixtures/input_data'
// const HTMLParser = require('node-html-parser')


describe('The Main page test', function(){

    this.beforeEach(function(){
        mainPage.visitMainPage()
    })

    let result
    it('Positive scenario: Check main page buner', function(){
        // mainPage.visitMainPage()
        //     .getSlideText()
        mainPage
            .checkSlide(mainPage.mainShopPageLocators.bunner.slide1, mainPageData.banner.slide1)
            .moveSlide()
            .checkSlide(mainPage.mainShopPageLocators.bunner.slide2, mainPageData.banner.slide2)
            .moveSlide()
            .checkSlide(mainPage.mainShopPageLocators.bunner.slide3, mainPageData.banner.slide3)
            // .checkProductTitle(mainPage.mainShopPageLocators.featuredProducts[0].title, mainPageData.featuredProducts[0].name)
            // .checkIsProductOnStock(mainPage.mainShopPageLocators.featuredProducts[0].chartBtn, true)
            // .checkProductTitle(mainPage.mainShopPageLocators.featuredProducts[0].price, mainPageData.featuredProducts[0].price)
    })


    it('Positive scenario: Check categories names', function(){
        mainPage
            .checkCategories()
    })


    it('Positive scenario: Check subcategories names', function(){
        mainPage
            .checkSubcategories()
    })

    it('Positive scenario: Check out of stock products', function(){
        mainPage
            .checkOutOfStockProducts()
    })

    it('Positive scenario: Check price with default currency', function(){
        mainPage
            .checkPrice(mainPageData.featuredProducts)
            .checkPrice(mainPageData.latestProducts)
            .checkPrice(mainPageData.bestsellersProducts)
            .checkPrice(mainPageData.specialsProducts)
    })

    it('Positive scenario: Change currency and check the price', function(){
        mainPage
            .checkPrice(mainPageData.featuredProducts)
            .checkPrice(mainPageData.latestProducts)
            .checkPrice(mainPageData.bestsellersProducts)
            .checkPrice(mainPageData.specialsProducts)
            .changeCurrency('Euro')
            .checkPrice(mainPageData.featuredProducts)
            .checkPrice(mainPageData.latestProducts)
            .checkPrice(mainPageData.bestsellersProducts)
            .checkPrice(mainPageData.specialsProducts)
            .changeCurrency('Sterling')
            .checkPrice(mainPageData.featuredProducts)
            .checkPrice(mainPageData.latestProducts)
            .checkPrice(mainPageData.bestsellersProducts)
            .checkPrice(mainPageData.specialsProducts)
            .changeCurrency('Dollar')
            .checkPrice(mainPageData.featuredProducts)
            .checkPrice(mainPageData.latestProducts)
            .checkPrice(mainPageData.bestsellersProducts)
            .checkPrice(mainPageData.specialsProducts)
    })

    it('Scenario: Add rundom product to cart', function(){
        mainPage
            .addProductToChart()
    })

    it('Scenario: Combine all tests together', function(){
        let section = 'Featured'

        mainPage
            .checkCategories()
            .checkSubcategories()
            .checkPromoSection()
            .checkSlide(mainPage.mainShopPageLocators.bunner.slide1, mainPageData.banner.slide1)
            .moveSlide()
            .checkSlide(mainPage.mainShopPageLocators.bunner.slide2, mainPageData.banner.slide2)
            .moveSlide()
            .checkSlide(mainPage.mainShopPageLocators.bunner.slide3, mainPageData.banner.slide3)
            .checkPrice(mainPageData.featuredProducts)
            .checkPrice(mainPageData.latestProducts)
            .checkPrice(mainPageData.bestsellersProducts)
            .checkPrice(mainPageData.specialsProducts)
            .changeCurrency('Euro')
            .checkPrice(mainPageData.featuredProducts)
            .checkPrice(mainPageData.latestProducts)
            .checkPrice(mainPageData.bestsellersProducts)
            .checkPrice(mainPageData.specialsProducts)
            .changeCurrency('Sterling')
            .checkPrice(mainPageData.featuredProducts)
            .checkPrice(mainPageData.latestProducts)
            .checkPrice(mainPageData.bestsellersProducts)
            .checkPrice(mainPageData.specialsProducts)
            .changeCurrency('Dollar')
            .checkPrice(mainPageData.featuredProducts)
            .checkPrice(mainPageData.latestProducts)
            .checkPrice(mainPageData.bestsellersProducts)
            .checkPrice(mainPageData.specialsProducts)
            .checkOutOfStockProducts()
            .addProductToChart()

            // .checkPrice()
            // .getCurrency()
            // .changeCurrency('Euro')
            // .checkCategories()
            // .checkSubcategories()

            // .checkSectionProducts(mainPageData.featuredProducts.sectionName)
            // .checkSectionProducts(mainPageData.latestProducts.sectionName)
            // .checkSectionProducts(mainPageData.bestsellersProducts.sectionName)
            // .checkSectionProducts(mainPageData.specialsProducts.sectionName)
            // .checkPromoSection()
            // .checkIsProductOnStock(mainPage.mainShopPageLocators.featuredProducts[1].chartBtn, true)
            
    })
})


// document.querySelector("body > div > header")

