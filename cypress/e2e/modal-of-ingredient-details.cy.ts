import productsFixture from '../fixtures/products.json'



describe('Test modal of ingredient details', () => {
    const objectForTesting = productsFixture.data[0].name

    beforeEach(()=>{
        cy.clearCookies()
        cy.clearLocalStorage()

        cy.intercept("GET", 'https://norma.nomoreparties.space/api/ingredients', {fixture: 'products'}).as("getIngredients")

        cy.initApp()

        cy.wait('@getIngredients')

        cy.get('[data-testid=card-product]').filter(`:contains("${objectForTesting}")`).click()
    })

    it('should open the modal of ingredient', () => {
        cy.get('[data-testid=modal_showed]').first().should('have.attr', 'data-testid')
    })

    it('should have data the modal of ingredient', () => {
        cy.get('[data-testid=ingredient-details_title]').should("have.text", objectForTesting)
    })

    it('should close the modal of ingredient', () => {
        cy.get('[data-testid=modal_close]').first().click()
        cy.get('[data-testid=modal_showed]').should('not.exist')
    })
});





export {}