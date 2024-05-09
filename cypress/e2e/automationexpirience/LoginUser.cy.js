describe('Login User', () => { 

    const name = 'Daniil';
    const email = 'Cmdcomandir@mail.ru';
    const password = 'malaka123';

    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/')
        cy.get('body').should('be.visible')
        cy.get('header .nav > li')
        .eq(3)
        .click();

    })

    it.skip('Login User with correct credentials', () => {

        cy.contains('Login to your account', { matchCase: false })

        cy.get('.login-form [data-qa="login-email"]')
        .type(email)

        cy.get('.login-form [data-qa="login-password"]')
        .type(password)

        cy.get('.login-form [data-qa="login-button"]')
        .click()

        cy.contains(' Logged in as ' + name)

    })

    it('Login user with incorrect credentials', () => {

        cy.contains('Login to your account', { matchCase: false })

        cy.get('.login-form [data-qa="login-email"]')
        .type(email)

        cy.get('.login-form [data-qa="login-password"]')
        .type('somewrongpassword')

        cy.get('.login-form [data-qa="login-button"]')
        .click()

        cy.contains('Your email or password is incorrect!', { matchCase: false })

    })

 })