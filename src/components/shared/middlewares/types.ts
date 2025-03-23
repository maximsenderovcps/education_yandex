import {ActionCreatorWithPayload, AsyncThunk} from "@reduxjs/toolkit";

export type TWSActions = ActionCreatorWithPayload<void, any>

export type TWSOnActionWithEvent = ActionCreatorWithPayload<Event, any> | AsyncThunk<void, Event, any>
export type TWSOnActionWithMessageEvent = ActionCreatorWithPayload<MessageEvent, any> | AsyncThunk<void, MessageEvent, any>
export type TWSOnActionWithMessageCloseEvent = ActionCreatorWithPayload<CloseEvent, any> | AsyncThunk<void, CloseEvent, any>


export interface IWSMiddlewareBase<RootState>{
    baseUrl: string
    path: string
    wsStartAction:       TWSActions
    wsDisconnectAction:  TWSActions
    onSuccessAction:     TWSOnActionWithEvent
    onErrorAction:       TWSOnActionWithEvent
    onMessageAction:     TWSOnActionWithMessageEvent
    onClosedAction:      TWSOnActionWithMessageCloseEvent

    //optionals
    wsReconnectAction?:  TWSActions
    selectAccessToken?:  (state: RootState)=>Record<string,string>
}