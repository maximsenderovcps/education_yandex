import React from "react";

import { Route, Routes} from 'react-router-dom'

import {RoutesPath} from "components/shared/configs";

import {RequireGuest} from "components/services/features/auth/require-guest";
import {RequireAuth} from "components/services/features/auth/require-auth";
import {Logout} from "components/services/features/auth/logout";

import {SpinnerWidget} from "components/sections/spinner-widget";
import {AppHeader} from "components/sections/app-header";
import {Content} from "components/sections/content";

import {LeftHeader} from "components/sections/profile/left-header";
import {ProfileForm} from "components/sections/profile/profile-form";

import {BurgerConstructorPage} from "./page-constructor-burger/page-constructor-burger";
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
                    <Route path='/' element={<BurgerConstructorPage/>}>
                        <Route path={RoutesPath.ingredient_detail} element={<IngredientDetailsPage  />}/>
                    </Route>

                    {/*Guest pages*/}
                    <Route element={<RequireGuest/>}>
                        <Route path={RoutesPath.login} element={<LoginPage/>}/>
                        <Route path={RoutesPath.register} element={<SignupPage/>}/>
                        <Route path={RoutesPath.forgot} element={<ForgotPage/>}/>
                        <Route path={RoutesPath.reset} element={<ResetPage/>}/>
                    </Route>
                    <Route path={RoutesPath.logout} element={<Logout/>}/>

                    {/*Only Auth*/}
                    <Route element={<RequireAuth/>}>
                        <Route path={RoutesPath.application_tape} element={<p>В разработке...</p>}/>
                        <Route element={<LeftHeader/>}>
                            <Route path={RoutesPath.profile} element={<ProfileForm/>}/>
                            <Route path={RoutesPath.orders_in_profile} element={<p>В разработке...</p>}/>
                        </Route>
                    </Route>

                    <Route path={"*"} element={<p>404 :(</p>}/>
                </Routes>
            </Content>
        </>
    )
}