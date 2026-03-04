describe('Proyecto Final - Flujo Completo AVI', () => {

  it('Flujo completo de la aplicación', () => {

    // 🔹 REGISTRO
    cy.visit('http://localhost:5173/registro')

    cy.wait(1000)

    cy.get('input[type="text"]').eq(0).type('12345678')
    cy.get('input[type="text"]').eq(1).type('Alejandro Test')
    cy.get('input[type="email"]').type('alejo@test.com')
    cy.get('input[type="date"]').type('2000-01-01')
    cy.get('input[type="tel"]').type('3001234567')
    cy.get('input[type="text"]').eq(2).type('Centro')
    cy.get('input[type="text"]').eq(3).type('Calle 123')

    cy.get('input[type="radio"][value="Trabajo"]').check()

    cy.get('input[type="password"]').eq(0).type('Test123*')
    cy.get('input[type="password"]').eq(1).type('Test123*')

    cy.wait(1000)

    // 🔹 LOGIN
    cy.visit('http://localhost:5173/login')

    cy.wait(1000)

    cy.get('input[type="text"]').type('12345678')
    cy.get('input[type="password"]').type('Test123*')

    cy.wait(1000)

    cy.contains('Iniciar Sesión').click()

    // 🔹 Simular sesión activa
    cy.visit('http://localhost:5173/BienvenidaTest', {
      onBeforeLoad(win) {
        win.localStorage.setItem('token', 'fake-token')
      }
    })

    cy.wait(2000)

    cy.contains('¡Bienvenido al Test Vocacional!')
      .should('be.visible')

    cy.contains('Iniciar Test Vocacional')
      .should('be.visible')

    cy.wait(2000)

  })

})