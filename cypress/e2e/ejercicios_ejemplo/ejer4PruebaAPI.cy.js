describe('Ejercicio 4 - API', () => {

  it('Debe validar respuesta 200', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts')
      .its('status')
      .should('equal', 200)
  })

})