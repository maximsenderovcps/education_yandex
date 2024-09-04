import type {AnyAction} from "redux";

import {initialState, spinnerSlice} from "./slice";
import {TSpinnerState} from "./types";



describe('Test reducer spinner', ()=>{
    it('should return the default initialState', ()=>{
        expect(spinnerSlice.reducer(undefined, {type: undefined}))
            .toEqual(initialState)

        expect(spinnerSlice.reducer(undefined, spinnerSlice.actions.stop()))
            .toEqual(initialState)
    })

    test('testing start', ()=>{
        const actual = 'Загрузка'
        const expected: TSpinnerState = {
            isLoading: true,
            text: 'Загрузка'
        }

        expect(spinnerSlice.reducer(undefined, spinnerSlice.actions.start(actual)))
            .toEqual(expected)
    })

    it('should hook action `pending` RTQ Query', ()=>{
        const actual: AnyAction = {
            type: 'api/any/pending'
        }
        const expected: TSpinnerState = {
            ...initialState, isLoading: true
        }

        expect(spinnerSlice.reducer(undefined, actual))
            .toEqual(expected)
    })

    it('should hook action `fulfilled`, `rejected` RTQ Query', ()=>{
        const stateMock: TSpinnerState = {
            isLoading: true,
            text: 'Loading...'
        }

        const actuals: AnyAction[] =  [{
            type: 'api/any/rejected'
        },{
            type: 'api/any/fulfilled'
        }]

        actuals.forEach((actual)=>{
            expect(spinnerSlice.reducer(stateMock, actual))
                .toEqual(initialState)
        })
    })
})