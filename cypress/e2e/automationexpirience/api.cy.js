describe('API TESTING', () => {

    it('Gets all products', () => {

        cy.request('https://automationexercise.com/api/productsList')
        .its('body').then(response => JSON.parse(response).products)
        .then(products => {

            for (let product of products) {
                expect(product).to.have.all.keys(['id', 'name', 'category', 'price', 'brand'])
            }



        })
        
    })

    it('Gets searched products by name', () => {

        cy.request('https://automationexercise.com/api/productsList')
        .its('body').as('allproducts')

        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            body: JSON.stringify({
                email: "admin",
                password: "123"
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .its('body')
        .then(products => {
            console.log(products)
            cy.log(products.message)
        })

    })

})