import {baseApi} from "components/shared/api";

import {API_PATH_FORGOT_PASSWORD} from "components/shared/configs/api";

import {mapResponse} from "./maps";
import {ForgotBody, ForgotDto} from "./types";


const forgotAPI = baseApi.injectEndpoints({
    endpoints: builder => ({
        postForgot: builder.mutation<ForgotDto, ForgotBody>({
            query: (body: ForgotBody) => ({
                url: API_PATH_FORGOT_PASSWORD,
                body,
                method: 'POST'
            }),
            transformResponse: (response: ForgotDto) => mapResponse(response),
        })
    })
})

export const { usePostForgotMutation } = forgotAPI
