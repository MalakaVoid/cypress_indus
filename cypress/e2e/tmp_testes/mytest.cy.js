describe('My not first test', () => {
  it('verify title', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.title().should('eq', 'OrangeHRM')

  })
})