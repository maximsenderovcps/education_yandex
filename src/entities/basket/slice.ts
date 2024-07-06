import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuid4 } from 'uuid';

import {IBasket, ISetIngredient} from "./context";

const initialState = {
    data: {
        bun: null,
        ingredients: [],
    } as IBasket
}

type IDType = string;
type IndexType = number;

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        add: {
            reducer: (state, action: PayloadAction<ISetIngredient>)=>{
                state.data.ingredients = state.data.ingredients.concat([action.payload])
            },
            prepare: (id: string) => {
                const uuid = uuid4()
                return { payload: { id, uuid } }
            },
        },
        addBun(state, action: PayloadAction<IDType>){
            state.data.bun = action.payload
        },
        move(state, action: PayloadAction<{fromUUID: string, toIndex: number}>){
            const ingredients = [...state.data.ingredients];
            const {fromUUID, toIndex} = action.payload

            const fromElement = ingredients.find((v)=>v.uuid === fromUUID)!
            const fromIndex = ingredients.indexOf(fromElement)

            ingredients.splice(fromIndex, 1);
            ingredients.splice(toIndex, 0, fromElement)
            state.data.ingredients = ingredients;
        },

        delete(state, action: PayloadAction<IndexType>) {
            state.data.ingredients = state.data.ingredients.filter((v, index)=>index !== action.payload)
        }
    }
})

export const { actions: basketActions } = basketSlice;