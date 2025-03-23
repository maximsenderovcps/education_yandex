import {sessionActions} from "entities/session";

import orderFixture from '../fixtures/post-order.json'


const test = it

describe('Test burger-constructor', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()

        cy.intercept("GET", 'https://norma.nomoreparties.space/api/ingredients', {fixture: 'products'}).as("getIngredients")
        cy.intercept("POST", 'https://norma.nomoreparties.space/api/orders', {fixture: 'post-order'}).as("postOrder")

        cy.initApp()

        cy.wait('@getIngredients')

        //User is required authed
        cy.AppDispatch(sessionActions.login({
            accessToken: "Mock accessToken",
            refreshToken: "Mock refreshToken",
            user: {email: "mock@mock.mock", name: "Mock"}}
        ))
    })


    test('series of steps to do the order', ()=>{
        /*
            1. перетаскивание ингредиента в конструктор

            2. открытие модального окна с данными о заказе при клике по кнопке «Оформить заказ»

            3. закрытие модальных окон при клике на кнопку закрытия.
        */
        //#1
        const dropPlace = cy.get('[data-testid=drop_card-product_from_burger-ingredients]').first()

        const ingredients = orderFixture.order.ingredients

        ingredients.forEach((ingredient)=>{
            cy.get('[data-testid=card-product]').filter(`:contains("${ingredient.name}")`).trigger('dragstart')
            dropPlace.trigger('drop')
        })
        ingredients.forEach((ingredient)=>{
            dropPlace.filter(`:contains("${ingredient.name}")`)
                .should('exist')
        })

        //#2
        cy.get('[data-testid=button-post-order]').click()
        cy.wait('@postOrder')
        cy.get('[data-testid=order-details_number-order]').should("have.text", orderFixture.order.number)

        //#3
        cy.get('[data-testid=modal_close]').first().click()
        cy.get('[data-testid=modal_showed]').should('not.exist')
    })

})


export {}