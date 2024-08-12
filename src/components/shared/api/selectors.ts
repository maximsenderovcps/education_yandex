import {RootStateType} from "components/services/providers/store";

export const selectAccessToken = (state: RootStateType): string => state.session.credentials.accessToken