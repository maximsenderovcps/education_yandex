import {combineReducers, configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import {baseApi} from "components/shared/api";
import {reducersEntities} from "entities/index";
import {ordersAllWSMiddleware, ordersAllOfUserWSMiddleware} from "entities/order";

//Reducers
export const rootReducers = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    ...reducersEntities
})

const middlewares = [
    // logger,
    baseApi.middleware,
    ordersAllWSMiddleware,
    ordersAllOfUserWSMiddleware
]
//if (process.env.NODE_ENV !== 'production') middlewares.unshift(logger)


// Configures store
export const store = configureStore({
    reducer: rootReducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(middlewares),
})

//
export const persistedStore = persistStore(store)


// expose store when run in Cypress
if (window.Cypress)
    window.store = store