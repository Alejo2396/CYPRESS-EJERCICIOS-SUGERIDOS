describe('Ejercicio 3 - Click botón', () => {

  it('Debe hacer click en un botón', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-btn').click()
  })

})