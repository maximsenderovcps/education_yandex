import React from "react";
import {
    BurgerIcon, ListIcon,
    Logo, ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { ButtonLink } from "components/shared/ui";

import styles from './app-header.module.css'


export const AppHeader = ()=>{
    return(
        <header>
            <nav  className={styles.navbar + ' ' + 'p-4'}>
                <div>
                    <ButtonLink extraClass={'mr-2'} active>
                        <BurgerIcon type="primary" />Конструктор
                    </ButtonLink>
                    <ButtonLink >
                        <ListIcon type="secondary" />Лента заявок
                    </ButtonLink>
                </div>
                <div className={styles.brand}>
                    <Logo />
                </div>
                 <ButtonLink >
                    <ProfileIcon type="secondary" />Личный кабинет
                 </ButtonLink>
            </nav>
        </header>
    )
}