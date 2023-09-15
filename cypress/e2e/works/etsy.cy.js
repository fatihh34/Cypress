const { should } = require("chai");

describe("", function() {
    
    
        
        before(() => {
            
           cy.visit("https://www.etsy.com") 
           //cy.url().should("eq","https://www.etsy.com")
           cy.title().should("include","Etsy")
            
            
        });

        it('down bottom for locating an element', () => {
            cy.scrollTo("bottom");
            cy.get(':nth-child(3) > .wt-hide-xs').should("contain","About")
            cy.scrollTo("top")

            cy.get('#global-enhancements-search-query').type("phone{enter}")
            cy.get('#sortby > .wt-menu__trigger').click()



        });


        it('search something and add to cart', () => {

            cy.wait(2000)

            const siralamaOptions = ['Relevancy', 'Lowest Price', 'Highest Price', 
            'Top Customer Reviews', 'Most Recent'];

            siralamaOptions.forEach((secenek) => {
                cy.get('#sortby > .wt-menu__body a').
                contains(secenek).
                should('be.visible')
                .then(() => {
                    cy.log('"${secenek}" secenek gorulur');
                });
            });


//cy.get('#sortby > .wt-menu__body')


        });

    })
    
    
    
    
    
    
