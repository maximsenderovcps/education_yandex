import {basketSlice} from "./basket/slice";
import {reducersProducts} from "./products";

export const reducersEntities = {
    [basketSlice.name]: basketSlice.reducer,
    ...reducersProducts,
}