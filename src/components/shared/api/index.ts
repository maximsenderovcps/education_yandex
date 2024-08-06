import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/dist/query/react";
import {API_URL} from "../configs/api";

import {createApi, retry} from "@reduxjs/toolkit/dist/query/react";
import {baseQueryWithReAuth} from "./baseQueryWithReAuth";

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery:  retry(fetchBaseQuery({baseUrl: API_URL}), {maxRetries:10}),
    endpoints: builder => ({})
})
