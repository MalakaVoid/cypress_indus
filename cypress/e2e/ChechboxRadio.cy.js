describe('Check UI elements', () => {

    beforeEach(() => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login();

    })

    it('Check Checbox buttons', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

        cy.get('input[type="checkbox"][value="1"]').as('inputVal1')
        .should('exist')

        cy.get('input[type="checkbox"][value="2"]')
        .should('exist')

        // selecting checkbox buttons
        cy.get('@inputVal1')
        .check({force: true})
        .should('be.checked')

        cy.get('@inputVal1')
        .uncheck({force: true})
        .should('not.be.checked')

        // select all checkboxes
        cy.get('input[type="checkbox"]').as('allCheckboxes')
        .check({force: true})
        .should('be.checked')

        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > input[type="checkbox"]')
        .check({force: true})

        cy.get('@allCheckboxes')
        .should('be.checked')

    })
 })