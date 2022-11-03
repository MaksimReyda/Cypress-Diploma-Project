/// <reference types="cypress" />

import shoppingChartPage from '../pages/shopping_chart_page'
// import {mainPageData} from '../../fixtures/input_data'


describe('Testing the Shopping chart page', function(){
    it("Positive scenario", function(){
        shoppingChartPage
        .visitPage()
        .viewChart()
    })
})