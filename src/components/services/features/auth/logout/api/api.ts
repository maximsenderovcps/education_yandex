import {baseApi} from "components/shared/api";

import {API_PATH_LOGOUT} from "components/shared/configs/api";

import {mapResponse} from "./maps";
import {LogoutBody, LogoutDto} from "./types";


const logoutAPI = baseApi.injectEndpoints({
    endpoints: builder => ({
        postLogout: builder.mutation<LogoutDto, LogoutBody>({
            query: (body: LogoutBody) => ({
                url: API_PATH_LOGOUT,
                body,
                method: 'POST'
            }),
            transformResponse: (response: LogoutDto) => mapResponse(response),
        })
    })
})

export const { usePostLogoutMutation } = logoutAPI
