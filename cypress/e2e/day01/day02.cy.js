//const { it } = require("mocha")

describe("ilk test",()=>{


    it("Cypress sayfasini ziyaret et",()=>{

        cy.visit("/")

        
    });

    it('url i kontrol et', () => {
        
        cy.url().should('include', 'amazon')
    });

    it("konrol yap", () => {
        cy.get('#twotabsearchtextbox').type('samsung s23{enter}');
        //cy.get('#nav-search-submit-button').click();

        cy.go('back');
        cy.wait(3000);
    });


    it("elektronik dropdownu sec", () => {
       // cy.get('#searchDropdownBox').select('Baby')
       //cy.select('#searchDropdown').select('Baby');

       //cy.get('select').select('Badminton')

       cy.get('#nav-link-accountList-nav-line-1').click()
    });

    it('contain', () => {
        cy.get('#ab-sign-in-ingress-link > span').click();
    });

    it('assertion', () => {
        cy.get('.a-spacing-base > .a-form-label').should("contain","Mobile")
        cy.get('.a-span5 > .a-form-label').should("be.visible","Password")
        cy.contains("Password").should("be.visible")



        
    });
    


})