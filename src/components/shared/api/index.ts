import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/dist/query/react";
import {API_URL} from "../configs/api";

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery:  retry(fetchBaseQuery({baseUrl: API_URL}), {maxRetries:10}),
    endpoints: builder => ({})
})
