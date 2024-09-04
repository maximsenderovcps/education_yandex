import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IOrders} from "../models";

import {ordersAllWSDisconnectAction} from "./ws/actions";
import {TOrdersAllState} from "./types";



export const initialState: TOrdersAllState = {
    loading: false,
    isStreaming: false,
    data: {
        orders: [], total: 0, totalToday: 0
    } as IOrders,
    error: '',
    isError: false
}


export const ordersAllSlice = createSlice({
    name: 'ordersAll',
    initialState,
    reducers: {
        streaming(state){
            state.isStreaming = true

            state.error = ''
            state.isError = false
        },
        loading(state){
            state.loading = true

            state.error = ''
            state.isError = false
        },
        update(state, action:PayloadAction<IOrders>){
            state.loading = false
            state.data = action.payload

            state.error = ''
            state.isError = false
        },
        closedStream(state){
            state.loading = false
            state.isStreaming = false
        },

        error(state, action:PayloadAction<string>){
            state.loading = false
            state.error = action.payload
            state.isError = true
        },

        clean: (state) => initialState
    },
    extraReducers: (builder) =>
    builder
        .addCase(ordersAllWSDisconnectAction, (state) => {
            state.loading = false
            state.isStreaming = false
        })
})


export const { actions: ordersAllActions } = ordersAllSlice;