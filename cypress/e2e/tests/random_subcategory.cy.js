/// <reference types="cypress" />

import randomSubcategoryPage from '../pages/random_subcategory_page'
import mainShopPage from '../pages/main_page'

describe('Random subcategory test', function(){
    it('Positive scenarion', function(){

        mainShopPage
        .visitMainPage()

        randomSubcategoryPage
        .selectRabdomSubcategoty()

    })
})

