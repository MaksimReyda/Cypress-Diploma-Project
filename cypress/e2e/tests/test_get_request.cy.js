/// <reference types="cypress" />

describe('Get request', function(){
    let result
    it('Test', function(){
        cy.request('GET', 'https://api.demoblaze.com/entries').then(function(response){
            console.log(response.body.Items)
            result = response.body.Items
        })

        cy.visit('https://www.demoblaze.com/index.html#')

        console.log('------------')
        console.log(result)
        cy.get('div#tbodyid > div:nth-of-type(1) .hrefch').then(function(test){
            console.log(result)
            expect(test.text().trim()).contains(result[0].title)
        })
    })
})