describe('Products testing', () => { 

    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/')
        cy.get('body').should('be.visible')

        cy.contains('header li', 'Products').click()
        cy.url().should('eq', 'https://www.automationexercise.com/products')
        cy.contains('h2.title', 'ALL Products', { matchCase: false })

    })

    it.skip('Get all products', () => {

        cy.request('https://automationexercise.com/api/productsList').its('body')
        .then((res) => {

            cy.get('.single-products .productinfo [data-product-id]').should('have.length', JSON.parse(res).products.length)

            cy.contains('.choose .nav a', 'View Product').click()

            cy.url().should('include','https://www.automationexercise.com/product_details/')

            cy.contains('h2', JSON.parse(res).products[0].name)
            cy.contains('span', JSON.parse(res).products[0].price)
            cy.contains('p', JSON.parse(res).products[0].brand)

        })


    })

    it('Search for products', () => {

        cy.get('#search_product').type('Men')
        cy.get('#submit_search').click()

        cy.contains('h2', 'SEARCHED PRODUCTS', { matchCase: false })

        cy.get('.features_items .single-products .productinfo').each(($el) => {

            cy.wrap($el).contains('p', 'men', { matchCase: false })

        })

    })

})