import {ThunkAction, ThunkDispatch, TypedStartListening} from "@reduxjs/toolkit";
import {TypedActionsFromEntities} from "entities";

import {rootReducers, store} from "./store";

//Typing
export type TApplicationActions = TypedActionsFromEntities

export type RootStateType = ReturnType<typeof rootReducers>
export type AppDispatch = ThunkDispatch<RootStateType, never, TApplicationActions>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootStateType,
    unknown,
    TApplicationActions
>;

export type TAsyncThunk =  { state: RootStateType, dispatch:  AppDispatch}

// @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
export type TypedListening = TypedStartListening<RootStateType, AppDispatch>


// expose store when run in Cypress
declare global {
    interface Window { store: typeof store; }
}