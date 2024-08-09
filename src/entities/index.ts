import {basketSlice} from "./basket/slice";
import {reducersProducts} from "./products";
import {sessionSlice} from "./session"
import {spinnerSlice} from "./spinner";

export const reducersEntities = {
    [basketSlice.name]: basketSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
    [spinnerSlice.name]: spinnerSlice.reducer,
    ...reducersProducts,
}
