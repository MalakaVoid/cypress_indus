describe('Scroll page events', () => { 

    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/')
        cy.scrollTo('bottom')

    })

    it('Scrolls page down and uses the scrollUp button', () => {

        cy.get('#scrollUp').should('be.visible').click()

        cy.window()
        .its('scrollY')
        .should('equal', 0);

    })

    it('Scrolls page down and uses the scrollUp button', () => {

        cy.get('#scrollUp').should('be.visible')
        
        cy.scrollTo('top')
        
        cy.get('#scrollUp').should('not.be.visible')

        cy.window()
        .its('scrollY')
        .should('equal', 0);

    })

})