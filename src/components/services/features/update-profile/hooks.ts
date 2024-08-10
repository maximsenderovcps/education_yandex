import React, {useCallback} from "react"

import {ProfileBody} from "./api/types"
import {useUpdateProfileMutation} from "./api/api";


export const useUpdateProfile = (state: ProfileBody): [
    ((e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>), any
] => {
    const [updateProfile, response] = useUpdateProfileMutation()

    const onHandle = useCallback(async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.currentTarget.checkValidity())
            await updateProfile(state)
    }, [state, updateProfile])

    return [onHandle, response]
};