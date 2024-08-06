import React, {ChangeEvent} from 'react'

import {clx} from "components/shared/utils";

import {LoginForm} from "components/widgets/auth/login-form";

import styles from "./login-page.module.css"


export const LoginPage = ()=>{

    return(
        <section className={styles.container}>
            <p className={clx(styles.title, ["text text_type_main-medium"])}>
                Вход
            </p>
            <LoginForm/>
        </section>
    )
}