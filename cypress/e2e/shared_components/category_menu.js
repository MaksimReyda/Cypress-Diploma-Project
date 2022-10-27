/// <reference types="cypress" />

class topCategotyMenuComponent {
    // categotyLocators = {
    //     home: '.categorymenu > li:nth-of-type(1) > a',
    //     apparelAndAccessories: '.categorymenu > li:nth-of-type(2) > a',
    //     makeup: '.categorymenu > li:nth-of-type(3) > a',
    //     fragrance: '.categorymenu > li:nth-of-type(4) > a',
    //     men: '.categorymenu > li:nth-of-type(5) > a',
    //     hairCare: '.categorymenu > li:nth-of-type(6) > a',
    //     hairCare
    // }

    categotyLocators = {
        home: {
            name: 'Home',
            locator: '.categorymenu > li:nth-of-type(1) > a'
        },
        apparelAndAccessories: {
            name: 'Apparel & accessories',
            locator: '.categorymenu > li:nth-of-type(2) > a',
            subcategories: [
                { name: 'Shoes', locator: 'li:nth-of-type(2) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a' },
                { name: 'T-shirts', locator: 'li:nth-of-type(2) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a' }
            ]
        },
        makeup: {
            name: 'Makeup',
            locator: '.categorymenu > li:nth-of-type(3) > a',
            subcategories: [
                { name: 'Cheeks', locator: 'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a' },
                { name: 'Eyes', locator: 'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a' },
                { name: 'Face', locator: 'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(3) > a' },
                { name: 'Lips', locator: 'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(4) > a' },
                { name: 'Nails', locator: 'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(5) > a' },
                { name: 'Value Sets', locator: '.subcategories > ul:nth-of-type(1) > li:nth-of-type(6) > a' }
            ]
        },
        skincare: {
            name: 'Skincare',
            locator: '.categorymenu > li:nth-of-type(4)',
            subcategories: [
                { name: 'Eyes', locator: 'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a' },
                { name: 'Face', locator: 'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a' },
                { name: 'Gift Ideas & Sets', locator: 'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(3) > a' },
                { name: 'Hands & Nails', locator: 'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(4) > a' },
                { name: 'Sun', locator: 'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(5) > a' }
            ]
        },
        fragrance: {
            name: 'Fragrance',
            locator: '.categorymenu > li:nth-of-type(5) > a',
            subcategories: [
                { name: 'Man', locator: 'li:nth-of-type(5) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a' },
                { name: 'Women', locator: 'li:nth-of-type(5) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a' }
            ]
        },
        men: {
            name: 'Men',
            locator: '.categorymenu > li:nth-of-type(6) > a',
            subcategories: [
                { name: 'Body & Shower', locator: 'li:nth-of-type(6) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a' },
                { name: 'Fragrance Sets', locator: 'li:nth-of-type(6) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a' },
                { name: 'Pre-Shave & Shaving', locator: 'li:nth-of-type(6) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(3) > a' },
                { name: 'Skincare', locator: 'li:nth-of-type(6) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(4) > a' }
            ]
        },
        hairCare: {
            name: 'Hair Care',
            locator: '.categorymenu > li:nth-of-type(7) > a',
            subcategories: [
                { name: 'Conditioner', locator: 'li:nth-of-type(7) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a' },
                { name: 'Shampoo', locator: 'li:nth-of-type(7) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a' }
            ]
        },
        books: {
            name: 'Books',
            locator: '.categorymenu > li:nth-of-type(8) > a',
            subcategories: [
                { name: 'Audio CD', locator: 'li:nth-of-type(8) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a' },
                { name: 'Paperback', locator: 'li:nth-of-type(8) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a' }
            ]
        },
        categoriesNames: [
            'Home', 'Apparel & accessories', 'Makeup', 'Skincare', 'Fragrance', 'Men', 'Hair Care', 'Books'
        ]
    }

    // mainCategories = {
    //     home: 'Home',
    //     apparelAndAccessories: 'Apparel & accessories',
    //     makeup: 'Makeup',
    //     fragrance: 'Fragrance',
    //     men: 'Men',
    //     hairCare: 'Hair Care',
    //     books: 'Books'
    // }

    visitMainPage(){
        cy.visit('https://automationteststore.com/')
        return this
    }

    // getCategotyName(){
    //     cy.get(this.categotyLocators.apparelAndAccessories).then(function(categotyName){
    //         console.log(categotyName.text().trim())
    //     })
    //     return this
    // }

    navigateToCategory(categoryLocator, categotyName){
        // cy.get(categoryLocator).should('contain', categotyName).click()
        cy.get(categoryLocator).trigger('mousemove').should('contain', categotyName).click({force: true})
        return this
    }


    navigateToSubcategory(categoryLocator, subcategoryLocator, subcategoryName){
        cy.get(categoryLocator).trigger('mousemove')
        cy.get(subcategoryLocator).should('contain', subcategoryName).click({force: true})
        return this
    }

    
}

module.exports = new topCategotyMenuComponent()