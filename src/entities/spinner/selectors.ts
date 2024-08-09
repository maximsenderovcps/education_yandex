import {RootStateType} from "components/services/providers/store";

export const selectIsLoading = (state: RootStateType) => state.spinner.isLoading
export const selectText = (state: RootStateType) => state.spinner.text