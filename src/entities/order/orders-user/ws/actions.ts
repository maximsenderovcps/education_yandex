import {createAction} from "@reduxjs/toolkit";


export const ordersAllOfUserWSStartAction = createAction<void, 'WS/Orders/all/user/wsStartAction'>(
  'WS/Orders/all/user/wsStartAction'
)

export const ordersAllOfUserWSDisconnectAction = createAction<void, 'WS/Orders/all/user/wsDisconnectAction'>(
  'WS/Orders/all/user/wsDisconnectAction'
)

export const ordersAllOfUserWSReconnectAction = createAction<void, 'WS/Orders/all/user/WSReconnectAction'>(
  'WS/Orders/all/user/WSReconnectAction'
)