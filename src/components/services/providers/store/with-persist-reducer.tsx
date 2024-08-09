import React from "react";
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react"

import {persistedStore, store} from "./store";


export const withPersistReducer = (component: () => React.ReactNode) => () =>(
    <Provider store={store}>
        <PersistGate loading={'Persistor states...'} persistor={persistedStore}>
            {component()}
        </PersistGate>
    </Provider>
)