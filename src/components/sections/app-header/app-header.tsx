import React from "react";
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";

import {ROUTES} from "components/shared/configs";
import { ButtonLink } from "components/shared/ui";

import styles from './app-header.module.css'


export const AppHeader = ()=>{
    return(
        <header>
            <nav  className={styles.navbar + ' pt-4 pb-4'}>
                <div>
                    <ButtonLink to={ROUTES.HOME} extraClass={'mr-2'} icon="burger" isParentLink>
                        Конструктор
                    </ButtonLink>
                    <ButtonLink to={ROUTES.FEED} icon="list" isParentLink>
                        Лента заказов
                    </ButtonLink>
                </div>
                <div className={styles.brand}>
                    <Logo />
                </div>
                <ButtonLink to={ROUTES.PROFILE} icon="profile" isParentLink>
                    Личный кабинет
                </ButtonLink>
            </nav>
        </header>
    )
}