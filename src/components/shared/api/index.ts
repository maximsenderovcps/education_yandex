import {createApi, retry} from "@reduxjs/toolkit/dist/query/react";
import {baseQueryWithReAuth} from "./baseQueryWithReAuth";

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery:  baseQueryWithReAuth,
    endpoints: builder => ({})
})
