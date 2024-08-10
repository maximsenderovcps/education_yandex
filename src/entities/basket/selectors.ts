import {RootStateType} from "components/services/providers/store";

import {IBasket} from "./context";

export const selectSelectedProductsState = (state: RootStateType): IBasket => state.basket.data