import {combineReducers, configureStore} from '@reduxjs/toolkit'
//import logger from 'redux-logger'

import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
});

import {baseApi} from "components/shared/api";
import {reducersEntities} from "entities";

//Reducers
const rootReducers = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    ...reducersEntities
})

// Configures store
export const store = configureStore({
    reducer: rootReducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(logger, baseApi.middleware),
})

export type RootStateType = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch