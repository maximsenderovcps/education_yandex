import {RootStateType} from "components/services/providers/store";

export const selectIsAuthChecked = (state: RootStateType) => !state.session.isLoading
export const selectIsAuthed = (state: RootStateType) => state.session.isAuthed
export const selectRefreshToken = (state: RootStateType) => state.session.credentials.refreshToken