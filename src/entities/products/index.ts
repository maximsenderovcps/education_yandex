import {IngredientDetailsSlice} from "./ingredient/slice";

export { useGetProductsQuery } from "./api/api";
export type { IProduct } from "./context";

export const reducersProducts = {
    [IngredientDetailsSlice.name]: IngredientDetailsSlice.reducer
}