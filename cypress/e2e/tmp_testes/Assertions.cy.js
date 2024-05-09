describe('Assertions', () => { 
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    it('validate url', () => {
        
        // should    and
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrmlive')

        // cy.url()
        // .should('contain', 'orangehrmlive')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('include', 'orangehrmlive.com')
        cy.url()
        .should('contain', 'orangehrmlive')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.include', 'orangehrmlive.com123')

    })

    it('validate title', () => {

        // include contain eq
        cy.title()
        .should('include', 'Orange')
        .should('contain', 'Orange')
        .should('eq', 'OrangeHRM')

    })

    it('validate elements', () => {

        // exist visible
        cy.get('.orangehrm-login-branding > img')
        .should('exist')
        .and('be.visible')

        // count of elements
        cy.get('a').should('have.length', 5)

        // type smth in input
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Admin')

        // check value of input 
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('have.value', 'Admin')

    })

    it('Explict assertions', () => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('admin123')

        cy.get('.oxd-button').click()


        let expName="xyz";

        cy.get('.oxd-userdropdown-name').then( (el) => {

            let actualName = el.text();

            // BDD STYLE ASSERTION
            expect(actualName).to.not.equal(expName);

            // TDD STYLE ASSERTION
            assert.notEqual(actualName, expName)

        })


    })

 })