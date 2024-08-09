import React, {ChangeEvent} from 'react'

import {clName} from "components/shared/utils";

import {LoginForm} from "components/sections/auth/login-form";

import styles from "./login-page.module.css"


export const LoginPage = ()=>{

    return(
        <section className={styles.container}>
            <p className={clName(styles.title, ["text text_type_main-medium"])}>
                Вход
            </p>
            <LoginForm/>
        </section>
    )
}