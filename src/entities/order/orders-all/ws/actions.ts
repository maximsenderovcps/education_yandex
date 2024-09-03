import {createAction} from "@reduxjs/toolkit";


export const ordersAllWSStartAction = createAction<void, 'WS/Orders/all/wsStartAction'>(
  'WS/Orders/all/wsStartAction'
)

export const ordersAllWSDisconnectAction = createAction<void, 'WS/Orders/all/wsDisconnectAction'>(
  'WS/Orders/all/wsDisconnectAction'
)