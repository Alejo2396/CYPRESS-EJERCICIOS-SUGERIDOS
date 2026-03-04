describe('Ejercicio 6 - Intercept', () => {

  it('Debe interceptar petición', () => {

    cy.intercept('GET', '**/comments').as('getComments')

    cy.visit('https://example.cypress.io/commands/network-requests')

    cy.wait('@getComments')
      .its('response.statusCode')
      .should('eq', 200)

  })

})