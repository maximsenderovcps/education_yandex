import React, {useCallback} from "react"

import {useAppDispatch} from "components/providers/store"

import {sessionActions} from "components/entities/session";

import {LogoutBody} from "./api/types"
import {usePostLogoutMutation} from "./api/api";


export const useHandleLogout = (state: LogoutBody): [(() => void), any] => {
    const [fetchLogout, response] = usePostLogoutMutation()
    const dispatch = useAppDispatch()

    const onHandle = useCallback(() => {
        if (state.token)
            fetchLogout(state)
        dispatch(sessionActions.logout())
    }, [state, dispatch])

    return [onHandle, response]
};