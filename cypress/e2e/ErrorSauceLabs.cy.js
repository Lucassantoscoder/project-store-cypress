// <reference types="cypress" />
// https://www.saucedemo.com/

// Cenário adicionar o preço errado do produto que foi selecionado e verificar o preço.

describe('Acessando Aplicação Sauce Labs', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
  })

    it('Adicionando Produto no carrinho', () => {
      cy.get('#item_4_title_link').should('have.text','Sauce Labs Backpack')
      cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text','$119.99')
      cy.log('Erro no valor!!')
    })         
})     