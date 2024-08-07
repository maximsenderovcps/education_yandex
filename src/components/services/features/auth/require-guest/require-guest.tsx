import React from 'react'

import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import {RoutesPath} from "components/shared/configs";

import {selectIsAuthed} from "entities/session";


export const RequireGuest = () => {
    const isAuthed = useSelector(selectIsAuthed)
    const location = useLocation()

    const {from} = location.state || { from: { pathname: RoutesPath.home } }

    return (
        !isAuthed
            ? <Outlet />
            : <Navigate to={from} replace/>
   )
}