import React from "react";

import { Route, Routes} from 'react-router-dom'

import {ROUTES} from "components/shared/configs";

import {RequireGuest} from "components/services/features/auth/require-guest";
import {RequireAuth} from "components/services/features/auth/require-auth";
import {Logout} from "components/services/features/auth/logout";

import {SpinnerWidget} from "components/sections/spinner-widget";
import {AppHeader} from "components/sections/app-header";
import {Content} from "components/sections/content";

import {LeftHeader} from "components/sections/profile/left-header";
import {ProfileForm} from "components/sections/profile/profile-form";

import {PageConstructorBurger} from "./page-constructor-burger/page-constructor-burger";
import {IngredientDetailsPage} from "./page-ingredient-details";

import {LoginPage} from "./page-auth/page-login";
import {SignupPage} from "./page-auth/page-signup";
import {ForgotPage} from "./page-auth/page-forgot";
import {ResetPage} from "./page-auth/page-reset";



export const Pages = () => {
    return (
        <>
            <SpinnerWidget/>
            <AppHeader/>
            <Content>
                <Routes>
                    <Route path='/' element={<PageConstructorBurger/>}>
                        <Route path={ROUTES.INGREDIENT_DETAIL} element={<IngredientDetailsPage  />}/>
                    </Route>

                    {/*Guest pages*/}
                    <Route element={<RequireGuest/>}>
                        <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
                        <Route path={ROUTES.REGISTER} element={<SignupPage/>}/>
                        <Route path={ROUTES.FORGOT} element={<ForgotPage/>}/>
                        <Route path={ROUTES.RESET} element={<ResetPage/>}/>
                    </Route>
                    <Route path={ROUTES.LOGOUT} element={<Logout/>}/>

                    {/*Only Auth*/}
                    <Route element={<RequireAuth/>}>
                        <Route path={ROUTES.APPLICATION_TAPE} element={<p>В разработке...</p>}/>
                        <Route element={<LeftHeader/>}>
                            <Route path={ROUTES.PROFILE} element={<ProfileForm/>}/>
                            <Route path={ROUTES.ORDERS_IN_PROFILE} element={<p>В разработке...</p>}/>
                        </Route>
                    </Route>

                    <Route path={"*"} element={<p>404 :(</p>}/>
                </Routes>
            </Content>
        </>
    )
}