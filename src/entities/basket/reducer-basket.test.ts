import {basketSlice, initialState} from "./slice";

import {TBasketState} from "./types";



describe('Test reducer-basket',()=>{
    const stateMock: TBasketState = {
        data: {
        ...initialState.data,
        ingredients:[
            {
                id: '0',
                uuid: "740a9ff4-4908-411e-aebb-7f84ca18cb77"
            },
            {
                id: '1',
                uuid: "888a9ff4-4908-411e-aebb-7f84ca18cb77"
            }
        ]
    }}

    it('should return the default initialState', ()=>{
        expect(basketSlice.reducer(undefined, {type: undefined})).toEqual(initialState)
        expect(basketSlice.reducer(undefined, basketSlice.actions.clean())).toEqual(initialState)
    })

    it('should return state with new position in basket', ()=>{
        const actual = '60666c42cc7b410027a1a9b1'
        const expected = '60666c42cc7b410027a1a9b1'
        expect(basketSlice.reducer(undefined, basketSlice.actions.add(actual)))
            .toMatchObject({data:{
                ...initialState.data,
                ingredients: [{
                    id: expected,
                    uuid: expect.stringMatching(/[0-9a-zA-Z]{10,}/)
                }]
            }})
    })

    it('should return state with new series positions in basket', ()=>{
        const actual = ['60666c42cc7b410027a1a9b1', 'fdsfsfdsc42cc7b410027a1a9b1']
        const expected = [
            {
                id: '60666c42cc7b410027a1a9b1',
                uuid: expect.stringMatching(/[0-9a-zA-Z]{10,}/)
            },
            {
                id: 'fdsfsfdsc42cc7b410027a1a9b1',
                uuid: expect.stringMatching(/[0-9a-zA-Z]{10,}/)
            }
        ]

        let state = basketSlice.reducer(undefined, basketSlice.actions.add(actual[0]))
        state = basketSlice.reducer(state, basketSlice.actions.add(actual[1]))

        expect(state)
            .toMatchObject({data:{
                ...initialState.data,
                ingredients: expected
            }})
    })

    it('should return state with new bun', ()=>{
        const actual = ['60666c42cc7b410027a1a9b1', 'fdsfsfdsc42cc7b410027a1a9b1']
        const expected = ['60666c42cc7b410027a1a9b1', 'fdsfsfdsc42cc7b410027a1a9b1']

        const state = basketSlice.reducer(undefined, basketSlice.actions.addBun(actual[0]))

        expect(basketSlice.reducer(state, basketSlice.actions.addBun(actual[1])))
            .toEqual({data: {...initialState.data, bun: expected[1]} })
    })

    it('should return new state after move', ()=>{
        const actual = {fromUUID: '740a9ff4-4908-411e-aebb-7f84ca18cb77', toIndex: 1}
        const expected: TBasketState = {
            data: {
            ...initialState.data,
            ingredients:[
                {
                    id: '1',
                    uuid: "888a9ff4-4908-411e-aebb-7f84ca18cb77"
                },
                {
                    id: '0',
                    uuid: "740a9ff4-4908-411e-aebb-7f84ca18cb77"
                }
            ]
        }}

        expect(basketSlice.reducer(stateMock, basketSlice.actions.move(
            actual
        ))).toEqual(expected)

        expect(basketSlice.reducer(undefined, basketSlice.actions.move(
            actual
        ))).toEqual(initialState)
    })

    it('should return new state after delete', ()=>{
        const actual = 1
        const expected: TBasketState = {
            data: {
            ...initialState.data,
            ingredients:[
                {
                    id: '0',
                    uuid: "740a9ff4-4908-411e-aebb-7f84ca18cb77"
                }
            ]
        }}

        expect(basketSlice.reducer(stateMock, basketSlice.actions.delete(
            actual
        ))).toEqual(expected)

        expect(basketSlice.reducer(undefined, basketSlice.actions.delete(
            actual
        ))).toEqual(initialState)
    })
})