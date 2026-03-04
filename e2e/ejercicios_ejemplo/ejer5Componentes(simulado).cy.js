describe('Ejercicio 5 - Componente', () => {

  it('Debe verificar texto visible', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })

})