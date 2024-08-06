import React, {useEffect} from 'react'
import {Navigate} from "react-router-dom";

import {RoutesPath} from "components/shared/configs";
import {useAppSelector} from "components/providers/store";
import {selectRefreshToken} from "components/entities/session";

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
            : <Navigate to={RoutesPath.login} replace/>
    )
}