import {baseApi} from "components/shared/api";

import {API_PATH_REGISTER} from "components/shared/configs/api";

import {ICrendentials} from "entities/session";

import {mapCrendentials} from "./maps";
import {RegisterBody, CrendentialsDto} from "./types";


export const registerAPI = baseApi.injectEndpoints({
    endpoints: builder => ({
        postRegister: builder.mutation<ICrendentials, RegisterBody>({
            query: (body: RegisterBody) => ({
                url: API_PATH_REGISTER,
                body,
                method: 'POST'
            }),
            transformResponse: (response: CrendentialsDto) => mapCrendentials(response),
        })
    })
})

export const { usePostRegisterMutation } = registerAPI
