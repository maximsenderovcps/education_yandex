import {RootStateType} from "components/services/providers/store";

export const selectSelectedProductsState = (state: RootStateType) => state.basket.data
