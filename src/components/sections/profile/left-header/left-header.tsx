import React from "react";
import {Outlet } from "react-router-dom"

import {ButtonLink} from "components/shared/ui";
import {RoutesPath} from "components/shared/configs";

import styles from './left-header.module.css'


export const LeftHeader = () => {
    return (
        <section className={styles.container + " p-10"}>
            <section>
                <nav className={styles.header}>
                    <ButtonLink to={RoutesPath.profile} size="large">
                        Профиль
                    </ButtonLink>
                    <ButtonLink to={RoutesPath.orders_in_profile} size="large">
                        История заказов
                    </ButtonLink>
                    <ButtonLink to={RoutesPath.logout} size="large">
                        Выход
                    </ButtonLink>
                </nav>
                <p className="text text_type_main-default text_color_inactive mt-20">
                    В этом разделе вы можете <br/> изменить свои персональные данные
                </p>
            </section>
            <section className={styles.right + " ml-15"}>
                <Outlet/>
            </section>
        </section>
    )
}