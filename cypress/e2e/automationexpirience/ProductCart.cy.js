describe('Product card actions', () => { 
    beforeEach(() => {

        cy.visit('https://www.automationexercise.com/')
        cy.get('body').should('be.visible')

    })

    it.skip('Add to cart', () => {
      
        cy.contains('header li', 'Products').click()

        cy.get('.single-products').eq(0)
        .trigger('mouseenter').wait(1000)
        .contains('.product-overlay a[data-product-id]', 'Add to cart', { matchCase: false })
        .click({ force: true})

        cy.contains('#cartModal button', 'Continue Shopping').click()

        cy.get('.single-products').eq(1)
        .trigger('mouseenter').wait(1000)
        .contains('.product-overlay a[data-product-id]', 'Add to cart', { matchCase: false })
        .click({ force: true})

        cy.contains('#cartModal a', 'View Cart').click()

        cy.get('#cart_info_table tbody tr').should('have.length', 2)

    })

    it.skip('Adds product to cart from product page and increases quantity', () => {

        cy.contains('header li', 'Products').click()

        cy.get('.product-image-wrapper').eq(0).contains('a', 'View Product').click()

        cy.get('input#quantity').type('{backspace}4')

        cy.contains('.product-information button', 'Add to cart', { matchCase: false }).click()

        cy.contains('#cartModal a', 'View Cart').click()

        cy.get('#product-1 .cart_quantity').contains('button', '4')

    })

    it.skip('Remove products from cart', () => {

        cy.contains('header li', 'Products').click()

        cy.get('.single-products').eq(0)
        .trigger('mouseenter').wait(1000)
        .contains('.product-overlay a[data-product-id]', 'Add to cart', { matchCase: false })
        .click({ force: true})

        cy.contains('#cartModal a', 'View Cart').click()

        cy.get('#cart_info_table tbody > tr').each((el) => {

            cy.wrap(el).find('.cart_delete a').click()

        })

        cy.get('#empty_cart').should('be.visible')

    })

    it.skip('Adds searched product to cart before login', () => {

        cy.contains('header li', 'Products').click()

        cy.get('#search_product')
        .type('Men')

        cy.get('#submit_search')
        .click()

        cy.get('.single-products').each((el) => {

            cy.wrap(el).contains('a[data-product-id]', 'Add to cart').click()

            cy.contains('#cartModal button', 'Continue Shopping', { matchCase: false })
            .click()

        })

        cy.contains('header li', ' Cart').click()
        cy.intercept('/pagead/js/adsbygoogle.js?client=ca-pub-1677597403311019') // for avoiding net error


        cy.get('#cart_info_table tbody').children().then((rows) => {

            return rows.length
            
        })
        .then((rowsBeforeAuth) => {
            
            cy.intercept('/delete_cart/*').as('deleteItem')
            cy.login()
            cy.contains('header li', ' Cart').click()


            cy.get('#cart_info_table tbody').children().then((rowsAfterAuth) => {

                expect(rowsBeforeAuth).to.eq(rowsAfterAuth.length)
                
            })

        })

    })

    function checkCredentials(delivery_block){

        cy.fixture('registrationUser').then((user) => {
            cy.get('.address_firstname.address_lastname')
            .should('contain.text', user.firstName)
            .and('contain.text', user.lastName)

            cy.get('.address_address1.address_address2')
            .should('contain.text', user.address)

            cy.get('.address_city.address_state_name.address_postcode')
            .should('contain.text', user.city).and('contain.text', user.state).and('contain.text', user.zipCode)

            cy.get('.address_country_name')
            .should('contain.text', user.country)

            cy.get('.address_phone')
            .should('contain.text', user.mobilePhone)
        })

    }

    it('Verifies that login user adress is the same at checkout', () => {

        cy.register()

        cy.contains('header li', 'Products').click()

        cy.intercept('/pagead/js/adsbygoogle.js?client=ca-pub-1677597403311019')

        cy.get('.single-products').eq(0)
        .trigger('mouseenter').wait(1000)
        .contains('.product-overlay a[data-product-id]', 'Add to cart', { matchCase: false })
        .click({ force: true})

        cy.contains('#cartModal a', 'View Cart').click()

        cy.contains('#do_action a', 'Proceed To Checkout').click()

        cy.get('#address_delivery').within(checkCredentials)
        cy.get('#address_invoice').within(checkCredentials)

        cy.deleteAccount()

    })

})