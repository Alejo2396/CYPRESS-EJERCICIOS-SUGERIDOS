describe('Sugerido 2', () => {

  it('Escribir nombre', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.get('.action-email')
      .type('Alejandro')
      .should('have.value', 'Alejandro')
  })

})