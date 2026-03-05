describe('Ejercicio 6 - Intercept', () => {
  it('Debe interceptar petición', () => {

    // Interceptar GET a cualquier comentario
    cy.intercept('GET', '**/comments/*').as('getComments')

    // Visitar página
    cy.visit('https://example.cypress.io/commands/network-requests')

    // Hacer clic en el botón correcto que dispara la petición
    cy.get('.network-btn.btn-primary').click()

    // Esperar la petición interceptada
    cy.wait('@getComments', { timeout: 10000 }) // aumentamos timeout para evitar errores
      .its('response.statusCode')
      .should('eq', 200)

  })
})