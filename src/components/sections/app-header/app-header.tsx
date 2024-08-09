import React from "react";
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";

import {RoutesPath} from "components/shared/configs";
import { ButtonLink } from "components/shared/ui";

import styles from './app-header.module.css'


export const AppHeader = ()=>{
    return(
        <header>
            <nav  className={styles.navbar + ' ' + 'pt-4 pb-4'}>
                <div>
                    <ButtonLink to={RoutesPath.home} extraClass={'mr-2'} icon="burger" isParentLink>
                        Конструктор
                    </ButtonLink>
                    <ButtonLink to={RoutesPath.application_tape} icon="list" isParentLink>
                        Лента заявок
                    </ButtonLink>
                </div>
                <div className={styles.brand}>
                    <Logo />
                </div>
                <ButtonLink to={RoutesPath.profile} icon="profile" isParentLink>
                    Личный кабинет
                </ButtonLink>
            </nav>
        </header>
    )
}