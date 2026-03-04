describe('Sugerido 5 - Login simulado', () => {

  it('Simular login y logout', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('form').click()

    cy.go('back')

  })

})