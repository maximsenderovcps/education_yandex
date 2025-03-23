import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ICrendentials, ITokens, IUser} from "./models";
import {TSessionState} from "./types";

export const initialState:TSessionState = {
    isAuthed: false,
    isLoading: false,

    credentials: {
        accessToken: "",
        refreshToken: "",
        user: {
            email: "",
            name: ""
        } as IUser

    } as ICrendentials,
};

export const slice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true
        },
        login: (state, payload:PayloadAction<ICrendentials>) => {
            state.credentials = payload.payload
            state.isAuthed = true
            state.isLoading = false
        },
        logout: () => initialState,

        refresh: (state, payload:PayloadAction<ITokens>) => {
            state.credentials = {
                ...state.credentials,
                ...payload.payload
            }
            state.isLoading = false
        }
    }
})
