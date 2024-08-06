import {createAction} from "@reduxjs/toolkit";


export const invalidateAccessTokenAction = createAction(
  'RTK/Query/invalidateAccessToken'
)

export const refreshTokenAction = () =>{
    const {refreshTokenThunk} = require("components/features/auth/refresh-token");
    return refreshTokenThunk()
}

