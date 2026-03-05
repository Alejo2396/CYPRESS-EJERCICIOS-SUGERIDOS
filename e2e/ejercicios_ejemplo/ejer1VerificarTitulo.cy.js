describe('Ejercicio 1 - Verificar título', () => {

  it('Debe validar el título de la página', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })

})