describe('Logout User', () => { 

    beforeEach(() => {

        cy.login();

    })

    it('Logout User', () => {

        cy.get('header .nav li').eq(3).click()

        cy.url().should('eq', 'https://www.automationexercise.com/login')

    })

 })