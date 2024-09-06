import {initialState, ordersAllOfUserSlice} from "./slice";

import {ordersAllOfUserWSDisconnectAction} from "./ws/actions";

import {IOrder, IOrders} from "../models";
import {TOrdersAllOfUserState} from "./types";



describe('Test reducer order-all', ()=>{
    it('should return the default initialState', ()=>{
        expect(ordersAllOfUserSlice.reducer(undefined, {type:undefined}))
            .toEqual(initialState)
    })

    test('action streaming', ()=>{
        const expected: TOrdersAllOfUserState = {
            ...initialState,
            isStreaming: true
        }

        expect(ordersAllOfUserSlice.reducer(undefined, ordersAllOfUserSlice.actions.streaming()))
            .toEqual(expected)
    })

    test('action loading', ()=>{
        const expected: TOrdersAllOfUserState = {
            ...initialState,
            loading: true
        }

        expect(ordersAllOfUserSlice.reducer(undefined, ordersAllOfUserSlice.actions.loading()))
            .toEqual(expected)
    })

    test('action update', ()=>{
        const stateMock:TOrdersAllOfUserState = {
            ...initialState,
            loading: true
        }

        const actual: IOrders = {orders: [{
                _id: "0000",
                createdAt: "",
                ingredients: ['0x0x0x0'],
                name: "Bun is bun",
                number: 200,
                status: 'pending',
                updatedAt: "2023-10-11"
        } as IOrder], total: 200, totalToday: 2000}

        const expected: TOrdersAllOfUserState = {
            ...initialState,
            data:actual
        }

        expect(ordersAllOfUserSlice.reducer(stateMock, ordersAllOfUserSlice.actions.update(actual)))
            .toEqual(expected)
    })

    test('action closedStream', ()=>{
        const stateMock:TOrdersAllOfUserState = {
            ...initialState,
            loading: true,
            isStreaming: true
        }


        const expected: TOrdersAllOfUserState = {
            ...initialState,
            loading: false,
            isStreaming: false
        }

        expect(ordersAllOfUserSlice.reducer(stateMock, ordersAllOfUserSlice.actions.closedStream()))
            .toEqual(expected)
    })

    test('action error', ()=>{
        const stateMock:TOrdersAllOfUserState = {
            ...initialState,
            loading: true,
            isStreaming: true
        }

        const actual = 'Net'

        const expected: TOrdersAllOfUserState = {
            ...initialState,
            loading: false,
            isStreaming: true,
            error: 'Net',
            isError: true
        }

        expect(ordersAllOfUserSlice.reducer(stateMock, ordersAllOfUserSlice.actions.error(actual)))
            .toEqual(expected)
    })

    test('action clean', ()=>{
        const stateMock:TOrdersAllOfUserState = {
            ...initialState,
            loading: true,
            isStreaming: true,
            error: 'Net'
        }

        expect(ordersAllOfUserSlice.reducer(stateMock, ordersAllOfUserSlice.actions.clean()))
            .toEqual(initialState)
    })

    it('should hook action `WSDisconnectAction` of Websocket', ()=>{
         const stateMock:TOrdersAllOfUserState = {
            ...initialState,
            loading: true,
            isStreaming: true
        }

        const expected: TOrdersAllOfUserState = {
             ...initialState,
            loading: false,
            isStreaming: false
        }

        expect(ordersAllOfUserSlice.reducer(stateMock, ordersAllOfUserWSDisconnectAction()))
            .toEqual(expected)
    })
})