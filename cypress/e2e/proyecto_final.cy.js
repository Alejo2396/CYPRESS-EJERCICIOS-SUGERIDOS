describe('Proyecto Final - Flujo Completo AVI', () => {

  it('Flujo completo de la aplicación', () => {

    // 1️⃣ Abrir página de inicio
    cy.visit('http://localhost:5173/')
    cy.wait(1000)

    // 2️⃣ Ir al registro
    cy.visit('http://localhost:5173/registro')
    cy.url().should('include', 'registro')

    // 3️⃣ Llenar formulario de registro
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

    // 4️⃣ Ir a login
    cy.visit('http://localhost:5173/login')
    cy.url().should('include', 'login')

    // 5️⃣ Iniciar sesión
    cy.get('input[type="text"]').type('12345678')
    cy.get('input[type="password"]').type('Test123*')

    cy.contains('Iniciar Sesión').click()

    // 6️⃣ Simular sesión activa
    cy.visit('http://localhost:5173/BienvenidaTest', {
      onBeforeLoad(win) {
        win.localStorage.setItem('token', 'fake-token')
      }
    })

    cy.wait(2000)

    // 7️⃣ Verificar sesión activa
    cy.contains('¡Bienvenido al Test Vocacional!')
      .should('be.visible')

    cy.contains('Iniciar Test Vocacional')
      .should('be.visible')

    // 8️⃣ Consultar elemento del sistema (entrar al test)
    cy.contains('Iniciar Test Vocacional').click()

    cy.wait(2000)

    // Validar navegación al test
    cy.url().should('include', 'pretest')

    // 9️⃣ Intentar cerrar sesión si existe el botón
    cy.get('body').then(($body) => {
      if ($body.text().includes('Cerrar Sesión')) {
        cy.contains('Cerrar Sesión').click()
      }
    })

  })

})