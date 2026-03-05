describe('Ejercicio 1 – Nivel básico', () => {
  it('Visita la página principal y verifica elementos', () => {
    cy.visit('https://example.cypress.io')

    // Verificar texto “Kitchen Sink”
    cy.contains('Kitchen Sink').should('be.visible')

    // Verificar que el botón "Type" existe
    cy.contains('type').should('exist')
  })
})