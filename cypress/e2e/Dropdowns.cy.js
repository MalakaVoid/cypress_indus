describe('Handle dropdowns', () => { 

    beforeEach(() => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login();

    })

    it.skip('Dropdown with select', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

        cy.get('#acf_address_country')
        .select('Italy')
        .should('have.value', 'Italy')

    })

    it('Dropdown without select', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
        .click()
        .type('Admin')
        .type('{enter}')
        .should('contain.text', 'Admin')

    })

 })