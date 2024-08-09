import {baseApi} from "components/shared/api";

import {API_PATH_RESET_PASSWORD} from "components/shared/configs/api";

import {mapResponse} from "./maps";
import {ResetBody, ResetDto} from "./types";


const resetAPI = baseApi.injectEndpoints({
    endpoints: builder => ({
        postReset: builder.mutation<ResetDto, ResetBody>({
            query: (body: ResetBody) => ({
                url: API_PATH_RESET_PASSWORD,
                body,
                method: 'POST'
            }),
            transformResponse: (response: ResetDto) => mapResponse(response),
        })
    })
})

export const { usePostResetMutation } = resetAPI
