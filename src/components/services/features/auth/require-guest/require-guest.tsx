import React from 'react'

import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import {ROUTES} from "components/shared/configs";

import {selectIsAuthed} from "entities/session";


export const RequireGuest = () => {
    const isAuthed = useSelector(selectIsAuthed)
    const location = useLocation()

    const {from} = location.state || { from: { pathname: ROUTES.HOME } }

    return (
        !isAuthed
            ? <Outlet />
            : <Navigate to={from} replace/>
   )
}