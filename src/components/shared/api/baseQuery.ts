import {fetchBaseQuery, retry} from "@reduxjs/toolkit/dist/query/react";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

import {RootStateType} from "components/services/providers/store";

import {API_URL} from "../configs/api";

import {selectAccessToken} from "./selectors";

export const baseQuery = retry(fetchBaseQuery({
    baseUrl: API_URL,
    // credentials: 'include',  //Access-Control-Allow-Origin
    prepareHeaders: (headers, api) => {
        const token = selectAccessToken(api.getState() as RootStateType)

        if (token) {
            headers.set("authorization", `${token}`) // include Bearer
        }
        return headers
    }
}),
    {
        retryCondition(error: FetchBaseQueryError, args: any, extraArgs: { attempt: number }): boolean {
            const attempt = extraArgs.attempt
            if (typeof error?.status === 'number' && attempt < 4)
                return error?.status > 499

            return false;
        }
    })