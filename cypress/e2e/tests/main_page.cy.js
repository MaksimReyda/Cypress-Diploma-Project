/// <reference types="cypress" />

import mainPage from '../pages/main_page'
import {mainPageData} from '../../fixtures/input_data'
const HTMLParser = require('node-html-parser')


describe('The Main page test', function(){
    let result
    it('Positive scenario', function(){
        // mainPage.visitMainPage()
        //     .getSlideText()
        mainPage.visitMainPage()
            .checkSlide(mainPage.mainShopPageLocators.bunner.slide1, mainPageData.banner.slide1)
            .moveSlide()
            .checkSlide(mainPage.mainShopPageLocators.bunner.slide2, mainPageData.banner.slide2)
            .moveSlide()
            .checkSlide(mainPage.mainShopPageLocators.bunner.slide3, mainPageData.banner.slide3)
            .checkProductTitle(mainPage.mainShopPageLocators.featuredProducts[0].title, mainPageData.featuredProducts[0].name)
            .checkIsProductOnStock(mainPage.mainShopPageLocators.featuredProducts[0].chartBtn, true)
            .checkProductTitle(mainPage.mainShopPageLocators.featuredProducts[0].price, mainPageData.featuredProducts[0].price)
    })

    it.only('', function(){
        let section = 'Featured'
        cy.request('GET', 'https://automationteststore.com/').then(function(response){
            // console.log(response.body.Items)
            // result = response.body.Items
            console.log(response)
            result = HTMLParser.parse(response.body)
            console.log(result)

            function recursy(element){
                element.childNodes.forEach(node => {
                    console.log(node)
                    if(element.childNodes.lenght > 1){
                        recursy(node)
                    }
                });
            }

            recursy(result)

            // console.log(Object.keys(result))
            // console.log(result.classList)
            // console.log(Object.keys(result.classList))
        })
        mainPage.visitMainPage()
            .checkCategories()
            // .checkSectionProducts(mainPageData.featuredProducts.sectionName)
            // .checkSectionProducts(mainPageData.latestProducts.sectionName)
            // .checkSectionProducts(mainPageData.bestsellersProducts.sectionName)
            // .checkSectionProducts(mainPageData.specialsProducts.sectionName)
            // .checkPromoSection()
            // .checkIsProductOnStock(mainPage.mainShopPageLocators.featuredProducts[1].chartBtn, true)
            
    })
})


// document.querySelector("body > div > header")

