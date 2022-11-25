/// <reference types="cypress" />

function getRandomNumber(min, max) {
    let random = Math.random() * (max - min) + min
    return Math.floor(random);
}

class randomSubcategoryPage {

    randomSubcategoryPageLocators = {
        subcategories: '.subcategories > ul > li > a',
        products: '.grid.list-inline.row.thumbnails > div > .thumbnail'
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
            let randomNumber = getRandomNumber(0, subcategories.length)
            cy.visit(subcategories[randomNumber].subcategoryLink)
        })

        return this
    }

    addToCartAllProducts(){

        let productsData = []

        cy.get(this.randomSubcategoryPageLocators.products).each(function($el, index, $list){
            if( !$el.find('.pricetag').children().hasClass('nostock') ){

                cy.getElementAttribute($el.find('.productcart'), 'href').then(function(link){
                    if(link === '#'){
                        console.log('CORRECT LINK')
                        // cy.get(cy.wrap($el.find('.productcart'))).click()

                        cy.get($el.prev().children()).then(function(productName){
                    
                            if($el.find('.price').children().hasClass('pricenew')){
                                cy.get($el.find('.pricenew')).then(function(pricenew){
                                    productsData.push({
                                        name: productName.text().trim(),
                                        price: pricenew.text().trim(),
                                        quantity: '1'
                                    })
                                })
                            } else{
                                cy.get($el.find('.price').children()).then(function(price){
                                    // prices.push(price.text().trim())
                                    productsData.push({
                                        name: productName.text().trim(),
                                        price: price.text().trim(),
                                        quantity: '1'
                                    })
            
                                })
                            }
        
                        })
        

                        cy.wrap($el.find('.productcart')).click()
                    }
                })
            }
        }).then(function(){
            console.log(productsData)
        })

        return this
    }

}

module.exports = new randomSubcategoryPage()