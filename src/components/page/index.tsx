import React from "react";

import {AppHeader} from "components/sections/app-header";
import {Content} from "components/sections/content";
import {BurgerConstructorPage} from "./burger-constructor-page";

export const Pages = () =>{
    return(
        <>
            <AppHeader/>
            <Content>
               <BurgerConstructorPage/>
            </Content>
        </>
    )
}