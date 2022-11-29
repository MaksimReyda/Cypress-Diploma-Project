/// <reference types="cypress" />

import topCategotyMenuComponent from '../shared_components/category_menu'


describe('Test Categories', function(){
    it('Positive scenario', function(){
        // topCategotyMenuComponent.visitMainPage()
        //     .getCategotyName()
        // topCategotyMenuComponent.visitMainPage()
        //     .navigateToCategory(topCategotyMenuComponent.categotyLocators.books.subcategories[0].locator, topCategotyMenuComponent.categotyLocators.books.subcategories[0].name)

        topCategotyMenuComponent.visitMainPage()
            .navigateToSubcategory(topCategotyMenuComponent.categotyLocators.books.locator,
                topCategotyMenuComponent.categotyLocators.books.subcategories[0].locator,
                topCategotyMenuComponent.categotyLocators.books.subcategories[0].name)
    })
})