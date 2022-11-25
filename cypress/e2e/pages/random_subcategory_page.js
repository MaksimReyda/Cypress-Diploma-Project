/// <reference types="cypress" />

class randomSubcategoryPage {

    randomSubcategoryPageLocators = {
        subcategories: '.subcategories > ul > li > a'
    }

    selectRabdomSubcategoty(){
        let subcategories = []

        cy.get(this.randomSubcategoryPageLocators.subcategories).each(function($el, index, $list){

            cy.getElementAttribute($el, 'href').then(function(link){

                subcategories.push({
                    subcategoryName: $el.text().trim(),
                    subcategoryLink: link
                })

            })
            // console.log($el.text().trim())
            console.log($list.length)

        }).then(function(){
            console.log(subcategories)
            
        })

        return this
    }

}

module.exports = new randomSubcategoryPage()