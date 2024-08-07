import React, {useCallback} from "react"

import {useAppDispatch} from "components/services/providers/store"

import {sessionActions} from "entities/session";

import {RegisterBody} from "./api/types"
import {usePostRegisterMutation} from "./api/api";


export const useHandleRegister = (state: RegisterBody): [((e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>), any] => {
    const [fetchRegister, response] = usePostRegisterMutation()
    const dispatch = useAppDispatch()

    const onHandle = useCallback(async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.currentTarget.checkValidity()) {
            const res = await fetchRegister(state)
            if ('data' in res)
                dispatch(sessionActions.login(res.data))
        }

    }, [state, dispatch])

    return [onHandle, response]
};