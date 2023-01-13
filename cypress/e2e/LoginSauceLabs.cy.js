
describe('Sauce Labs Demo Login', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })

    it('Login sauce', () =>  {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.log('Logado com sucesso!')
    })
})

