import React, {ChangeEvent} from 'react'

import {clName} from "components/shared/utils";

import {SignupForm} from "components/sections/auth/signup-form";

import styles from "./signup-page.module.css"


export const SignupPage = ()=>{

    return(
        <section className={styles.container}>
            <p className={clName(styles.title, ["text text_type_main-medium"])}>
                Регистрация
            </p>
            <SignupForm />
        </section>
    )
}