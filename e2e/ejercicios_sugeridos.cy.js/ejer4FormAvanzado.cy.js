describe('Sugerido 4', () => {

  it('Llenar y enviar formulario', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email').type('alejo@gmail.com')
    cy.get('.action-textarea').type('Comentario de prueba')

  })

})