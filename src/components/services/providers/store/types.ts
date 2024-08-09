import {TypedStartListening} from "@reduxjs/toolkit";
import {store, rootReducers} from "./store";

//Typing
// Infer the `RootStateType` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch

// @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
export type TypedListening = TypedStartListening<RootStateType, AppDispatch>