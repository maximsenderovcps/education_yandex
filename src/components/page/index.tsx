import React from "react";

import { Route, Routes, useNavigationType} from 'react-router-dom'

import {ROUTES} from "components/shared/configs";

import {RequireGuest} from "components/services/features/auth/require-guest";
import {RequireAuth} from "components/services/features/auth/require-auth";
import {Logout} from "components/services/features/auth/logout";

import {SpinnerWidget} from "components/sections/spinner-widget";
import {AppHeader} from "components/sections/app-header";
import {Content} from "components/sections/content";

import {LeftHeader} from "components/sections/profile/left-header";
import {ProfileForm} from "components/sections/profile/profile-form";
import {ListOrders as ProfileListOrders} from "components/sections/profile/list-orders";

import {PageConstructorBurger} from "./page-constructor-burger";
import {IngredientDetailsPage} from "./page-ingredient-details";

import {PageFeed} from "./page-feed";

import {PageOrderComposition} from "./page-order-composition";

import {LoginPage} from "./page-auth/page-login";
import {SignupPage} from "./page-auth/page-signup";
import {ForgotPage} from "./page-auth/page-forgot";
import {ResetPage} from "./page-auth/page-reset";



export const Pages = () => {
    const transitionType = useNavigationType()
    return (
        <>
            <SpinnerWidget/>
            <AppHeader/>
            <Content>
                <Routes>
                    <Route path='/' element={<PageConstructorBurger/>}>
                        {/* Popup */}
                        <Route path={ROUTES.INGREDIENT_DETAIL} element={<IngredientDetailsPage  />}/>
                    </Route>

                    <Route path={ROUTES.FEED} element={<PageFeed/>}>
                        {/* Popup */}
                        {(transitionType !== 'POP') && <Route path={':id'} element={<PageOrderComposition  />}/>}
                    </Route>
                    {(transitionType === 'POP') && <Route path={ROUTES.ORDER_IN_FEED} element={<PageOrderComposition  />}/>}

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
                        <Route element={<LeftHeader/>}>
                            <Route path={ROUTES.PROFILE} element={<ProfileForm/>}/>
                            <Route path={ROUTES.ORDERS_IN_PROFILE} element={<ProfileListOrders/>}>
                                {/* Popup */}
                                {(transitionType !== 'POP') && <Route path={':id'} element={<PageOrderComposition  />}/>}
                            </Route>
                        </Route>
                        {(transitionType === 'POP') && <Route path={ROUTES.ORDER_IN_PROFILE} element={<PageOrderComposition  />}/>}
                    </Route>

                    <Route path={"*"} element={<p>404 :(</p>}/>
                </Routes>
            </Content>
        </>
    )
}