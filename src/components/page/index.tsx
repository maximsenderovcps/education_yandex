import React from "react";

import {AppHeader} from "components/sections/app-header";
import {Content} from "components/sections/content";
import {PageConstructorBurger} from "./page-constructor-burger";

export const Pages = () =>{
    return(
        <>
            <AppHeader/>
            <Content>
               <PageConstructorBurger/>
            </Content>
        </>
    )
}