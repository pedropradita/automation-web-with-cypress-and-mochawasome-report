context("People", () => {

  it("Using feature search with valid user", () => {
    cy.login()
    cy.contains('People').click()
    cy.get('input').type('pedropradita')
    cy.get('tbody > tr > :nth-child(1)').should('have.length',1)
  });

  it("Using feature search with invalid user", () => {

    cy.get('input').clear().type('abcd')
    cy.get('tbody > tr > :nth-child(1)').should('have.length',1)
  });



});
