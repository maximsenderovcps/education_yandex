import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IOrders} from "../models";

import {ordersAllOfUserWSDisconnectAction} from "./ws/actions";


type TOrdersAllOfUserState = {
    loading: boolean,
    isStreaming: boolean,
    data: IOrders,
    error: string,
    isError: boolean
}


const initialState:TOrdersAllOfUserState = {
    loading: false,
    isStreaming: false,
    data: {
        orders: [], total: 0, totalToday: 0
    } as IOrders,
    error: '',
    isError: false
}


export const ordersAllOfUserSlice = createSlice({
    name: 'ordersAllOfUser',
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
            .addCase(ordersAllOfUserWSDisconnectAction, (state) => {
                state.loading = false
                state.isStreaming = false
            })
})


export const { actions: ordersAllOfUserActions } = ordersAllOfUserSlice;