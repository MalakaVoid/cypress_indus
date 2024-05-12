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
    // cy.get('body').should('be.visible')
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

Cypress.Commands.add('register', () => {

    cy.fixture('registrationUser').then((registerUser) => {

        cy.get('header .nav > li')
        .eq(3)
        .click();

        cy.get('.signup-form input[data-qa="signup-name"]')
        .type(registerUser.name)

        cy.get('.signup-form input[data-qa="signup-email"]')
        .type(registerUser.email)

        cy.get('.signup-form [data-qa="signup-button"]')
        .click()
        
        cy.contains('Enter Account Information', { matchCase: false })

        cy.get('#id_gender1').check()

        cy.get('input[data-qa="name"]').should('have.value', registerUser.name)

        cy.get('input[data-qa="email"]').should('have.value', registerUser.email).and('be.disabled')

        cy.get('input[data-qa="password"]').type(registerUser.password)

        cy.get('select[data-qa="days"]').select(registerUser.day)
        cy.get('select[data-qa="months"]').select(registerUser.month)
        cy.get('select[data-qa="years"]').select(registerUser.year)

        cy.get('#newsletter').check()

        cy.get('input[data-qa="first_name"]').type(registerUser.firstName)
        cy.get('input[data-qa="last_name"]').type(registerUser.lastName)
        cy.get('input[data-qa="address"]').type(registerUser.address)
        cy.get('select[data-qa="country"]').select(registerUser.country)
        cy.get('input[data-qa="state"]').type(registerUser.state)
        cy.get('input[data-qa="city"]').type(registerUser.city)
        cy.get('input[data-qa="zipcode"]').type(registerUser.zipCode)
        cy.get('input[data-qa="mobile_number"]').type(registerUser.mobilePhone)

        cy.get('[data-qa="create-account"]').click()

        cy.contains('[data-qa="account-created"]', 'ACCOUNT CREATED!', { matchCase: false })

        cy.get('[data-qa="continue-button"]').click()

        cy.contains(' Logged in as ' + registerUser.name)

    })

})

Cypress.Commands.add('deleteAccount', () => {

    cy.get('header .nav li').eq(4).click()
    cy.contains('ACCOUNT DELETED!', { matchCase: false })
    cy.get('[data-qa="continue-button"]').click()

})