describe('Teste de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://mellro.com/auth/login')
    cy.get('[style="flex: 1 1 0%;"] > .anunciarv2_input__1OKh7').type('email@email.com')
    cy.get('[style="position: relative; width: 100%;"] > .anunciarv2_input__1OKh7').type('@senha')
    cy.get('[style="background-color: rgb(24, 100, 171); height: 49px; width: 76px;"] > .cardImovel_buttonPrimaryNew__1Kb3a > section').click()
  })
})