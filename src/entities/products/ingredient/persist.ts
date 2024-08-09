import sessionStorage from "redux-persist/lib/storage/session";
import {persistReducer} from "redux-persist";

import {slice} from "./slice";

export const persistConfig = {
    key: slice.name,
    storage: sessionStorage,
    // blacklist:['error','isLoading']
}

// Persisted reducer
slice.reducer = persistReducer(persistConfig, slice.reducer) as unknown as typeof slice.reducer

export const IngredientDetailsSlice = slice;