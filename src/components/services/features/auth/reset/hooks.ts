import React, {useCallback} from "react"

import {useAppDispatch} from "components/services/providers/store"

import {ResetBody} from "./api/types"
import {usePostResetMutation} from "./api/api";


export const useHandleReset = (state: ResetBody): [((e: React.SyntheticEvent<HTMLFormElement>) => Promise<void>), any] => {
    const [fetchReset, response] = usePostResetMutation()
    const dispatch = useAppDispatch()

    const onHandle = useCallback(async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.currentTarget.checkValidity())
            await fetchReset(state)
    }, [state, dispatch])

    return [onHandle, response]
};