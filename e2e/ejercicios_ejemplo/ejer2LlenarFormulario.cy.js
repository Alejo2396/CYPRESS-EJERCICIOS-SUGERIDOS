describe('Ejercicio 2 - Llenar formulario', () => {

  it('Debe escribir en un input', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-email')
      .type('alejandro@gmail.com')
      .should('have.value', 'alejandro@gmail.com')
  })

})