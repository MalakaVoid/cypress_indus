describe('Contact Us Form', () => { 

    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/')
        cy.get('body').should('be.visible')

    })

    it('Verifies contact us form', () => {

        cy.get('header .nav li').last().click()

        cy.contains('GET IN TOUCH', { matchCase: false })

        cy.fixture('contactUsData').then((data) => {

            cy.get('[data-qa="name"]').type(data.name)
            cy.get('[data-qa="email"]').type(data.email)
            cy.get('[data-qa="subject"]').type(data.subject)
            cy.get('[data-qa="message"]').type(data.message)

            cy.get('[data-qa="submit-button"]').click()

            cy.contains('Success! Your details have been submitted successfully.', { matchCase: false })

        })

    })

})