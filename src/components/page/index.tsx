import React from "react";

import {AppHeader} from "components/widgets/app-header";
import {Content} from "components/widgets/content";
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