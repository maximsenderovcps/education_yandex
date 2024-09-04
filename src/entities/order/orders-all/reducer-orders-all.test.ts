import {initialState, ordersAllSlice} from "./slice";

import {ordersAllWSDisconnectAction} from "./ws/actions";

import {IOrder, IOrders} from "../models";
import {TOrdersAllState} from "./types";




describe('Test reducer order-all', ()=>{
    it('should return the default initialState', ()=>{
        expect(ordersAllSlice.reducer(undefined, {type:undefined}))
            .toEqual(initialState)
    })

    test('action streaming', ()=>{
        const expected: TOrdersAllState = {
            ...initialState,
            isStreaming: true
        }

        expect(ordersAllSlice.reducer(undefined, ordersAllSlice.actions.streaming()))
            .toEqual(expected)
    })

    test('action loading', ()=>{
        const expected: TOrdersAllState = {
            ...initialState,
            loading: true
        }

        expect(ordersAllSlice.reducer(undefined, ordersAllSlice.actions.loading()))
            .toEqual(expected)
    })

    test('action update', ()=>{
        const stateMock:TOrdersAllState = {
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

        const expected: TOrdersAllState = {
            ...initialState,
            data:actual
        }

        expect(ordersAllSlice.reducer(stateMock, ordersAllSlice.actions.update(actual)))
            .toEqual(expected)
    })

    test('action closedStream', ()=>{
        const stateMock:TOrdersAllState = {
            ...initialState,
            loading: true,
            isStreaming: true
        }


        const expected: TOrdersAllState = {
            ...initialState,
            loading: false,
            isStreaming: false
        }

        expect(ordersAllSlice.reducer(stateMock, ordersAllSlice.actions.closedStream()))
            .toEqual(expected)
    })

    test('action error', ()=>{
        const stateMock:TOrdersAllState = {
            ...initialState,
            loading: true,
            isStreaming: true
        }

        const actual = 'Net'

        const expected: TOrdersAllState = {
            ...initialState,
            loading: false,
            isStreaming: true,
            error: 'Net',
            isError: true
        }

        expect(ordersAllSlice.reducer(stateMock, ordersAllSlice.actions.error(actual)))
            .toEqual(expected)
    })

    test('action clean', ()=>{
        const stateMock:TOrdersAllState = {
            ...initialState,
            loading: true,
            isStreaming: true,
            error: 'Net'
        }

        expect(ordersAllSlice.reducer(stateMock, ordersAllSlice.actions.clean()))
            .toEqual(initialState)
    })

    it('should hook action `WSDisconnectAction` of Websocket', ()=>{
         const stateMock:TOrdersAllState = {
            ...initialState,
            loading: true,
            isStreaming: true
        }

        const expected: TOrdersAllState = {
             ...initialState,
            loading: false,
            isStreaming: false
        }

        expect(ordersAllSlice.reducer(stateMock, ordersAllWSDisconnectAction()))
            .toEqual(expected)
    })
})