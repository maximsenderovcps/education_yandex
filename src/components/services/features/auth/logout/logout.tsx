import React, {useEffect} from 'react'
import {Navigate} from "react-router-dom";

import {ROUTES} from "components/shared/configs";
import {useAppSelector} from "components/services/providers/store";
import {selectRefreshToken} from "entities/session";

import {useHandleLogout} from "./hooks";


export const Logout = () => {
    const refreshToken = useAppSelector(selectRefreshToken)
    const [onLogout] = useHandleLogout({token: refreshToken})

    useEffect(()=>{
        onLogout()
    }, [])

    return (
        refreshToken
            ? null
            : <Navigate to={ROUTES.LOGIN} replace/>
    )
}