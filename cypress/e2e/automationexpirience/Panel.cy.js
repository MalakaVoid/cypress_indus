describe('Left panel on product page', () => { 

    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/products')
        cy.get('.left-sidebar').should('be.visible')

    })

    it.skip('Views categories products', () => {

        cy.get('.category-products').within(($productsBlock) => {

            cy.root()
            .should('be.visible')
            
            cy.contains('a', 'Women', { matchCase: false })
            .click()

            cy.get('.panel-body')
            .contains('a', 'Dress', { matchCase: false })
            .click()
            
        })

        cy.url().should('contain', '/category_products/')

        cy.contains('WOMEN - DRESS PRODUCTS', { matchCase: false })

    })

    it('Views brand products', () => {

        cy.get('.brands_products')
        .contains('a', 'MADAME', { matchCase: false })
        .click()

        cy.url().should('contain', '/brand_products/')

        cy.contains('BRAND - MADAME PRODUCTS', { matchCase: false })


        cy.get('.brands_products')
        .contains('a', 'POLO', { matchCase: false })
        .click()

        cy.url().should('contain', '/brand_products/')

        cy.contains('BRAND - POLO PRODUCTS', { matchCase: false })

    })

})