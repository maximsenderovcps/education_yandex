import {baseApi} from "components/shared/api";

import {API_PATH_USER} from "components/shared/configs/api";

import {IUserProfile} from "../models";

import {mapResponse} from "./maps";
import {ProfileDto} from "./types";


const profileAPI = baseApi.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query<IUserProfile, void>({
            query: () => ({
                url: API_PATH_USER,
                method: 'GET'
            }),
            transformResponse: (response: ProfileDto) => mapResponse(response),
        })
    })
})

export const { useGetProfileQuery } = profileAPI
