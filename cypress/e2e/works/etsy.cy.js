const { should } = require("chai");

describe("", function() {
    
    
        
        beforeEach(() => {
            
           cy.visit("https://www.etsy.com") 
           //cy.url().should("eq","https://www.etsy.com")
           cy.title().should("include","Etsy")
            
            
        });

        it('search something and add to cart', () => {





    });
    
    
    
    
    
    
})