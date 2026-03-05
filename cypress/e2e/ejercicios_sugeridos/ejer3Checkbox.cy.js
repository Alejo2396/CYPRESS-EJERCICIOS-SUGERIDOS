describe('Ejercicio 3 – Nivel medio: Checkboxes', () => {
  it('Visita Checkboxes y marca todos', () => {
    // Visitar página con checkboxes
    cy.visit('https://example.cypress.io/commands/actions')

    // Seleccionar todos los checkbox y marcar, incluso los deshabilitados
    cy.get('input[type="checkbox"]').each(($el) => {
      cy.wrap($el).check({ force: true }).should('be.checked')
    })
  })
})