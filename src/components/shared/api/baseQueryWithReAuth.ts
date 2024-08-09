import {
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta
} from "@reduxjs/toolkit/query";
import {
  BaseQueryApi,
  QueryReturnValue,
} from '@reduxjs/toolkit/src/query/baseQueryTypes'

import {baseQuery} from "./baseQuery";

import {refreshTokenAction} from "./actions"



const AUTH_ERROR_CODES = new Set([403])


export async function baseQueryWithReAuth(
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: {}
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
    let result = await baseQuery(args, api, extraOptions)

    if (
        typeof result?.error?.status === 'number'
        && AUTH_ERROR_CODES.has(result.error!.status)
    ){
        // console.log('sending invalidateAccessTokenAction')
        // send refresh token to get new access token
        await api.dispatch(refreshTokenAction())

        // retry with new access token
        result = await baseQuery(args, api, extraOptions)
    }

    return result
}