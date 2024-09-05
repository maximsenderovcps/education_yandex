import {initialState, slice} from "./slice";
import {IProduct} from "../context";
import {TIngredientDetailsState} from "./types";



describe('Test reducer ingredientDetails', ()=>{
    it('should return the default initialState', ()=>{
        expect(slice.reducer(undefined, {type:undefined}))
            .toEqual(initialState)
    })

    test('action add', ()=>{
        const actual: IProduct  = {
            __v: 0,
            _id: "0000",
            calories: 0,
            carbohydrates: 0,
            fat: 0,
            image: "pic",
            image_large: "",
            image_mobile: "",
            name: "Bun",
            price: 600,
            proteins: 0,
            type: 'bun',
            uuid: undefined
        }

        const expected: TIngredientDetailsState = {
            data: {isOpen: true, details: actual}
        }

        expect(slice.reducer(undefined, slice.actions.add(actual)))
            .toEqual(expected)
    })

    test('action clean', ()=>{
        expect(slice.reducer({data: {...initialState.data, isOpen: true}},
                slice.actions.clean()
            )
        )
            .toEqual(initialState)
    })
})