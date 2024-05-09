describe('Products testing', () => { 

    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/')
        cy.get('body').should('be.visible')

    })

    it('Get all products', () => {
        
        cy.contains('header li', 'Products').click()

        cy.request('https://automationexercise.com/api/productsList').its('body')
        .then((res) => {

            cy.get('.single-products .productinfo [data-product-id]').should('have.length', JSON.parse(res).products.length)

        })

    })

})