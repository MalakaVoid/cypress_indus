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

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').as('text')
        .click()

        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        
        cy.get('@text').should('contain.text', 'Admin')


    })

 })