import type {AnyAction, Middleware, MiddlewareAPI} from 'redux';

import {ActionCreatorWithPayload, AsyncThunk, PayloadAction, ThunkDispatch} from "@reduxjs/toolkit";

import {printf} from "../utils";




export const websocketMiddlewareBase =
    <
        AppDispatch extends ThunkDispatch<RootState, unknown, AnyAction>,
        RootState
    >
    (
        baseUrl: string,
        path: string,

        wsStartAction:  ActionCreatorWithPayload<void, any>,
        wsDisconnectAction:  ActionCreatorWithPayload<void, any>,

        onSuccessAction:  ActionCreatorWithPayload<Event, any> | AsyncThunk<void, Event, any>,
        onErrorAction:  ActionCreatorWithPayload<Event, any> | AsyncThunk<void, Event, any>,
        onMessageAction:  ActionCreatorWithPayload<MessageEvent, any> | AsyncThunk<void, MessageEvent, any>,
        onClosedAction:  ActionCreatorWithPayload<CloseEvent, any> | AsyncThunk<void, CloseEvent, any>,

        //optionals
        wsReconnectAction?:  ActionCreatorWithPayload<void, any>,
        selectAccessToken?:  (state: RootState)=>Record<string,string>

    ): Middleware<{}, RootState, AppDispatch> => {

    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: PayloadAction) => {
            const {dispatch, getState} = store;  //{getState}
            // const {type, payload} = action;

            if (wsStartAction.match(action) && socket === null) {
                let fullUrl = baseUrl+path

                if (selectAccessToken) {
                    const params = selectAccessToken(getState())
                    if(params)
                        fullUrl = printf(fullUrl, params)
                }
                // объект класса WebSocket
                socket = new WebSocket(fullUrl);
            }

            if (socket) {
                // функция, которая вызывается при открытии сокета
                socket.onopen = (event: Event) => {
                    dispatch(onSuccessAction(event));
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = (event: Event) => {
                    dispatch(onErrorAction(event));
                    dispatch(onClosedAction(event as CloseEvent));
                    socket = null
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = (event:  MessageEvent) => {
                    // const {data} = event; //JSON.load(data)
                    dispatch(onMessageAction(event));
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = (event: CloseEvent) => {
                    if (socket === null)
                        dispatch(onClosedAction(event));
                    else {
                        socket = null
                        dispatch(wsStartAction())
                    }
                };

                if (wsDisconnectAction.match(action)) {
                    socket.close(1000)
                    socket = null
                }

                if (wsReconnectAction && wsReconnectAction.match(action)){
                    socket && socket.close()
                    socket = null
                    dispatch(wsStartAction())
                }
            }

            next(action);
        };
    });
}; 