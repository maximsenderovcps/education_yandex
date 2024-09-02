import {ThunkAction, ThunkDispatch, TypedStartListening} from "@reduxjs/toolkit";
import {TypedActionsFromEntities} from "entities";

import {rootReducers} from "./store";

//Typing
type TApplicationActions = TypedActionsFromEntities
// Infer the `RootStateType` and `AppDispatch` types from the store itself
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