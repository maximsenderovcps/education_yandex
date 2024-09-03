import {websocketMiddlewareBase} from "components/shared/middlewares";

import {AppDispatch, RootStateType} from "components/services/providers/store";
import {API_WS_PATH_USER_ALL_ORDERS, API_WS_URL} from "components/shared/configs/api";

import {selectAccessToken} from "entities/session";

import {
    ordersAllOfUserWSDisconnectAction,
    ordersAllOfUserWSReconnectAction,
    ordersAllOfUserWSStartAction
} from "./actions";
import {onErrorActionThunk, onMessageActionThunk, onSuccessActionThunk, onClosedActionThunk} from "./thunks";



export const selectAccessTokenWithoutBearer = (state: RootStateType): { accessToken: string } => ({
    accessToken: selectAccessToken(state).replace('Bearer ', '')
})


export const ordersAllOfUserWSMiddleware = websocketMiddlewareBase<AppDispatch, RootStateType>(
    API_WS_URL,
    API_WS_PATH_USER_ALL_ORDERS,

    ordersAllOfUserWSStartAction,
    ordersAllOfUserWSDisconnectAction,

    onSuccessActionThunk,
    onErrorActionThunk,
    onMessageActionThunk,
    onClosedActionThunk,

    ordersAllOfUserWSReconnectAction,
    selectAccessTokenWithoutBearer
)