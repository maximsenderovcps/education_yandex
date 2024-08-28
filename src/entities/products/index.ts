import {ReturnSliceActionsType} from "components/shared/utils";

import {IngredientDetailsSlice} from "./ingredient/persist";

export { useGetProductsQuery } from "./api/api";
export type { IProduct } from "./context";

export const reducersProducts = {
    [IngredientDetailsSlice.name]: IngredientDetailsSlice.reducer
}

//typing actions
export type TypedActionsFromProducts =
    ReturnSliceActionsType<typeof IngredientDetailsSlice.actions>