import {baseApi} from "components/shared/api";
import {API_PATH_REFRESH_TOKEN} from "components/shared/configs/api";

import {ITokens} from "entities/session";

import {mapTokens} from "./maps";
import {RefreshTokenBody, RefreshTokenDto} from "./types";


export const refreshTokenAPI = baseApi.injectEndpoints({
    endpoints: builder => ({
        requestNewTokens: builder.query<ITokens, RefreshTokenBody>({
            query: (body: RefreshTokenBody) => ({
                url: API_PATH_REFRESH_TOKEN,
                body,
                method: 'POST'
            }),
            transformResponse: (response: RefreshTokenDto) => mapTokens(response),
        })
    })
})


// export const { useGetProductsQuery } = productAPI