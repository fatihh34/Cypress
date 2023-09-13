
describe('hepsiburada',()=>{

/*beforeEach(()=>{

cy.visit("https://www.cimri.com.tr")




});*/


/*afterEach(()=>{

    cy.reload();

}); */

it('cimri website should be verify', () => {
    
    //cy.url().should("eq", "https://www.cimri.com.tr");
    cy.title().should("include", "cimri");

});

it('should searching', () => {

    cy.get('#search-input').click();
    
    
});














});
    
    
    
 