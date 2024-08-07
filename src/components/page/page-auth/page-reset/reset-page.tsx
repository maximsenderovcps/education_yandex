import React, {ChangeEvent} from 'react'

import {clName} from "components/shared/utils";

import {ResetForm} from "components/sections/auth/reset-form";

import styles from "./reset-page.module.css"


export const ResetPage = ()=>{

    return(
        <section className={styles.container}>
            <p className={clName(styles.title, ["text text_type_main-medium"])}>
                Сброс пароля
            </p>
            <ResetForm />
        </section>
    )
}