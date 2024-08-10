import {RootStateType} from "components/services/providers/store";

import {IIngredientDetails} from "./context";

export const selectCurrentIngredientDetailsState = (state: RootStateType): IIngredientDetails => state.ingredientDetails.data;