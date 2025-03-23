import {websocketMiddlewareBase} from "components/shared/middlewares";

import {AppDispatch, RootStateType} from "components/services/providers/store";
import {API_WS_PATH_ALL_ORDERS, API_WS_URL} from "components/shared/configs/api";

import {ordersAllWSDisconnectAction, ordersAllWSStartAction} from "./actions";
import {onErrorActionThunk, onMessageActionThunk, onSuccessActionThunk, onClosedActionThunk} from "./thunks";


export const ordersAllWSMiddleware = websocketMiddlewareBase<AppDispatch, RootStateType>({
    baseUrl: API_WS_URL,
    path: API_WS_PATH_ALL_ORDERS,

    wsStartAction: ordersAllWSStartAction,
    wsDisconnectAction: ordersAllWSDisconnectAction,

    onSuccessAction: onSuccessActionThunk,
    onErrorAction: onErrorActionThunk,
    onMessageAction: onMessageActionThunk,
    onClosedAction: onClosedActionThunk
})