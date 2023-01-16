/// <reference types="cypress" />
// https://www.saucedemo.com/ cy.visit('/')

describe('Sauce Labs', () => {
    it('Acessando Aplicação Sauce Labs', () => {
      cy.exec('npm cache clear --force') // limpar cache
      cy.visit('https://www.saucedemo.com')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('contain', '/inventory.html')

    // Verificando titulo e preço do produto
      cy.get('#item_4_title_link').should('have.text','Sauce Labs Backpack')
      cy.contains('$29.99')
      cy.get('#item_1_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bolt T-Shirt')
      cy.contains('$15.99')

    // Adicionando Produto no carrinho
      cy.get('#add-to-cart-sauce-labs-backpack').click()
      cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()  
      cy.get('#shopping_cart_container').click()
      cy.contains('Checkout')
      cy.get('#checkout').click()
      cy.wait(2000)        

    // Checando suas informações e endereço
      cy.get('[data-test="firstName"]').type('Lucas')
      cy.get('[data-test="lastName"]').type('Santos')  
      cy.get('[data-test="postalCode"]').type('03164200') //
      cy.get('[data-test="continue"]').click()  


    // Checando valor total do produto e finalizando a compra
      cy.contains('Total: $49.66')  // valor total somado.  
      cy.get('.summary_subtotal_label').should('have.text','Item total: $45.98') // valor do produto
      cy.log('Total: $49.66') // valor total com frete.
      cy.get('[data-test="finish"]').click()
      cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
      cy.log('Obrigado pela compra!!')
  }) 
})
   
