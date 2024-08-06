import {baseApi} from "components/shared/api";

import {API_PATH_USER} from "components/shared/configs/api";

import {IUserProfile} from "components/entities/profile";

import {mapResponse} from "./maps";
import {ProfileDto, ProfileBody} from "./types";


export const profileAPI = baseApi.injectEndpoints({
    endpoints: builder => ({
        updateProfile: builder.mutation<IUserProfile, ProfileBody>({
            query: (body: ProfileBody) => ({
                url: API_PATH_USER,
                body,
                method: 'PATCH'
            }),
            transformResponse: (response: ProfileDto) => mapResponse(response),
        })
    })
})

export const { useUpdateProfileMutation } = profileAPI
