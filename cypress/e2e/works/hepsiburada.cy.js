
describe('hepsiburada',()=>{

beforeEach(()=>{

cy.visit("https://www.cimri.com.tr")




});


/*afterEach(()=>{

    cy.reload();

}); */

it('cimri website should be verify', () => {
    
    //cy.url().should("eq", "https://www.cimri.com.tr");
    cy.title().should('include', "Cimri");

});

it('should searching', () => {

    const expected ="iphone 15"

    cy.get('.SearchBox_searchBarPlaceholder__bWMWC').click();
    cy.get('#search-input').type(expected);
    cy.wait(2000);
    cy.contains('i phone 15').click()
    
    
});














});
    
    
    
 