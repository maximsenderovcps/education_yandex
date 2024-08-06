import {baseApi} from "components/shared/api";

import {API_PATH_LOGIN} from "components/shared/configs/api";

import {ICrendentials} from "components/entities/session";

import {mapCrendentials} from "./maps";
import {LoginBody, CrendentialsDto} from "./types";


export const loginAPI = baseApi.injectEndpoints({
    endpoints: builder => ({
        postLogin: builder.mutation<ICrendentials, LoginBody>({
            query: (body: LoginBody) => ({
                url: API_PATH_LOGIN,
                body,
                method: 'POST'
            }),
            transformResponse: (response: CrendentialsDto) => mapCrendentials(response),
        })
    })
})

export const { usePostLoginMutation } = loginAPI
