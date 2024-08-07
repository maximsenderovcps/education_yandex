import React, {ChangeEvent} from 'react'

import {clName} from "components/shared/utils";

import {ForgotForm} from "components/sections/auth/forgot-form";

import styles from "./forgot-page.module.css"


export const ForgotPage = ()=>{

    return(
        <section className={styles.container}>
            <p className={clName(styles.title, ["text text_type_main-medium"])}>
                Восстановление пароля
            </p>
            <ForgotForm />
        </section>
    )
}