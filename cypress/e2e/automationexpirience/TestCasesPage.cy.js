describe('Verify Test Cases page', () => { 

    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/')

    })

    it('Verify Test Cases page', () => {

        cy.contains('header li', 'Test Cases').click()

        cy.url().should('eq', 'https://www.automationexercise.com/test_cases')

    })

})