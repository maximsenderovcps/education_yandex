import type {AnyAction} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TSpinnerState} from "./types";

const isActionOfRTKQuery = (action: any, ends: string): boolean => action.type.startsWith('api/') && action.type.endsWith(ends)

export const initialState: TSpinnerState = {
    isLoading: false,
    text: 'Загрузка...'
};

export const spinnerSlice = createSlice({
    name: 'spinner',
    initialState,
    reducers: {
        start: (state, action: PayloadAction<string>) => {
            state.isLoading = true
            state.text = action?.payload || ""
        },

        stop: () => initialState,
    },
    extraReducers: (builder) =>
        builder
            .addMatcher((action)=> isActionOfRTKQuery(action, '/pending'), (state) => {
                state.isLoading = true
            })
            .addMatcher((action)=> isActionOfRTKQuery(action, '/fulfilled'), () => initialState)
            .addMatcher((action)=> isActionOfRTKQuery(action, '/rejected'), () => initialState)
})

export const {actions: spinnerActions} = spinnerSlice