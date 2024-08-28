import {ReturnSliceActionsType} from "components/shared/utils";

import {basketSlice} from "./basket/slice";
import {reducersProducts, TypedActionsFromProducts} from "./products";
import {sessionSlice} from "./session"
import {spinnerSlice} from "./spinner";
import {
    ordersAllSlice,
    ordersAllOfUserSlice,
    TypedActionsFromOrder
} from "./order";

export const reducersEntities = {
    [spinnerSlice.name]: spinnerSlice.reducer,
    [basketSlice.name]:  basketSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
    [ordersAllSlice.name]: ordersAllSlice.reducer,
    [ordersAllOfUserSlice.name]: ordersAllOfUserSlice.reducer,
    ...reducersProducts,
}

//typing actions
export type TypedActionsFromEntities =
    TypedActionsFromProducts |
    TypedActionsFromOrder |
    ReturnSliceActionsType<typeof spinnerSlice.actions> |
    ReturnSliceActionsType<typeof basketSlice.actions> |
    ReturnSliceActionsType<typeof sessionSlice.actions>

