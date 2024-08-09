import React, {useCallback} from "react"

import {useAppDispatch} from "components/services/providers/store"

import {ForgotBody} from "./api/types"
import {usePostForgotMutation} from "./api/api";


export const useHandleForgot = (state: ForgotBody): [((e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>), any] => {
    const [fetchForgot, response] = usePostForgotMutation()
    const dispatch = useAppDispatch()

    const onHandle = useCallback(async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.currentTarget.checkValidity())
            await fetchForgot(state)
    }, [state, dispatch])

    return [onHandle, response]
};