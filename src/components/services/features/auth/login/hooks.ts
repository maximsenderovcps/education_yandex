import React, {useCallback} from "react"

import {useAppDispatch} from "components/services/providers/store"

import {sessionActions} from "entities/session";

import {LoginBody} from "./api/types"
import {usePostLoginMutation} from "./api/api";


export const useHandleLogin = (state: LoginBody): [((e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>), any] => {
    const [fetchLogin, response] = usePostLoginMutation()
    const dispatch = useAppDispatch()

    const onHandle = useCallback(async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.currentTarget.checkValidity()) {
            const res = await fetchLogin(state)
            if ('data' in res)
                dispatch(sessionActions.login(res.data))
        }

    }, [state, dispatch])

    return [onHandle, response]
};