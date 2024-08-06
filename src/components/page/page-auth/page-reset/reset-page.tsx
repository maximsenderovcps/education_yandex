import React, {ChangeEvent} from 'react'

import {clx} from "components/shared/utils";

import {ResetForm} from "components/widgets/auth/reset-form";

import styles from "./reset-page.module.css"


export const ResetPage = ()=>{

    return(
        <section className={styles.container}>
            <p className={clx(styles.title, ["text text_type_main-medium"])}>
                Сброс пароля
            </p>
            <ResetForm />
        </section>
    )
}