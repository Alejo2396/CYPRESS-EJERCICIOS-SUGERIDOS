describe('Sugerido 4 – Formulario Avanzado', () => {
  it('Llenar campos de formulario de ejemplo', () => {

    // Visitar la página de Actions
    cy.visit('https://example.cypress.io/commands/actions')

    // Llenar campo email
    cy.get('.action-email').type('alejo@gmail.com')

    // Llenar campo nombre
    cy.get('.action-focus').type('Alejandro Test')

    // Llenar campo adicional que sí existe (usando input[type="password"] como ejemplo)
    cy.get('#password1').type('Test123*')

    // (Opcional) hacer submit si hubiera botón de enviar
    // cy.get('.action-form button[type="submit"]').click()
  })
})