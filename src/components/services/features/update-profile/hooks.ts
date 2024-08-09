import React, {useCallback} from "react"

import {useAppDispatch} from "components/services/providers/store"

import {ProfileBody} from "./api/types"
import {useUpdateProfileMutation} from "./api/api";


export const useUpdateProfile = (state: ProfileBody): [
    ((e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>), any
] => {
    const [updateProfile, response] = useUpdateProfileMutation()
    const dispatch = useAppDispatch()

    const onHandle = useCallback(async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.currentTarget.checkValidity())
            await updateProfile(state)
    }, [state, dispatch])

    return [onHandle, response]
};