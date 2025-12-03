describe('template spec', () => {
  it('passes', () => {
    describe("My Portfolio Smoke Test", () => {
      it("visits the homepage", () => {
        cy.visit("http://localhost:5173/");
      });
    });
    
  });

  it('homepage', function() {
    cy.visit('http://localhost:5173/')
    cy.get('#root nav.layout-nav a[href="/about"]').click();
    cy.get('#root a[href="/education"]').click();
    cy.get('#root a[href="/projects"]').click();
    
  });
})