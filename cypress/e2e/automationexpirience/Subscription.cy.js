describe('Subscription', () => { 

    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/')
        cy.get('body').should('be.visible')

    })

    it('Subscript on home page', () => {

        cy.get('#footer #susbscribe_email').type('someemail@mail.ru')

        cy.get('#footer #subscribe').click()

        cy.get('#footer').contains('You have been successfully subscribed!', { matchCase: false })

    })

    it('Subscript on cart page', () => {

        cy.visit('https://www.automationexercise.com/view_cart')

        cy.get('#footer #susbscribe_email').type('someemail@mail.ru')

        cy.get('#footer #subscribe').click()

        cy.get('#footer').contains('You have been successfully subscribed!', { matchCase: false })

    })

})