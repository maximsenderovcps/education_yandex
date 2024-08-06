import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

import {slice} from "./slice";

export const persistConfig = {
    key: slice.name,
    storage,
    blacklist:['error','isLoading']
}

// Persisted reducer
slice.reducer = persistReducer(persistConfig, slice.reducer) as unknown as typeof slice.reducer

export const { actions: sessionActions } = slice;
export const sessionSlice = slice;