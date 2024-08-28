import {createAsyncThunk} from "@reduxjs/toolkit";

import {TAsyncThunk} from "components/services/providers/store";

import {refreshTokenThunk} from "components/services/features/auth/refresh-token";

import {IOrders} from "../../models";

import {ordersAllOfUserActions} from "../slice";

import {
    ordersAllOfUserWSDisconnectAction,
    ordersAllOfUserWSReconnectAction
} from "./actions";

import {TError, TOrdersDto} from "./types";
import {mapOrders} from "./maps";




export const onSuccessActionThunk = createAsyncThunk<
    void,
    Event,
    TAsyncThunk
    > (
    'WS/Orders/all/user/onSuccessActionThunk',
    async (e,  api) => {
        const dispatch = api.dispatch
        dispatch(ordersAllOfUserActions.loading())
        dispatch(ordersAllOfUserActions.streaming())

        console.log('WS/Orders/all/user/onSuccessActionThunk')
        console.log(e)
    }
)

export const onErrorActionThunk= createAsyncThunk<
    void,
    Event,
    TAsyncThunk
    > (
    'WS/Orders/all/user/onErrorActionThunk',
    async (e,  api) => {
        const dispatch = api.dispatch
        dispatch(ordersAllOfUserActions.error(e.type))

        console.log('WS/Orders/all/user/onErrorActionThunk')
        console.log(e)
    }
)

export const onMessageActionThunk= createAsyncThunk<
    void,
    MessageEvent<string>,
    TAsyncThunk
    > (
    'WS/Orders/all/user/onMessageActionThunk',
    async (e,  api) => {
        const dispatch = api.dispatch
        const data: TOrdersDto | TError = JSON.parse(e.data)

        if(!data.success) {
            if (data.message === "Invalid or missing token"){
                await dispatch(refreshTokenThunk())
                dispatch(ordersAllOfUserWSReconnectAction())
            }else {
                dispatch(ordersAllOfUserActions.error(data.message))
                dispatch(ordersAllOfUserWSDisconnectAction())
            }
        }
        else {
            const orders: IOrders = mapOrders(data)
            dispatch(ordersAllOfUserActions.update(orders))
        }

        console.log('WS/Orders/all/user/onMessageActionThunk')
        console.log(e)
    }
)

export const onClosedActionThunk= createAsyncThunk<
    void,
    CloseEvent,
    TAsyncThunk
    > (
    'WS/Orders/all/user/onClosedActionThunk',
    async (e,  api) => {
        const dispatch = api.dispatch
        dispatch(ordersAllOfUserActions.closedStream())

        console.log('WS/Orders/all/user/onClosedActionThunk')
        console.log(e)
    }
)