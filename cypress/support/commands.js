// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => { 
    
    cy.visit('https://www.automationexercise.com/')
    cy.get('body').should('be.visible')
    cy.get('header .nav > li')
    .eq(3)
    .click();

    cy.fixture('correctUser').then((user) => {

        cy.contains('Login to your account', { matchCase: false })

        cy.get('.login-form [data-qa="login-email"]')
        .type(user.email)
    
        cy.get('.login-form [data-qa="login-password"]')
        .type(user.password)
    
        cy.get('.login-form [data-qa="login-button"]')
        .click()
    
        cy.contains(' Logged in as ' + user.name)

    })

})