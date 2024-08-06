import React from 'react'
import {Navigate} from "react-router-dom";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components"

import {RoutesPath} from "components/shared/configs";
import {ErrorText, EmailInput, WarningText} from "components/shared/ui";
import {useForm} from "components/shared/hooks";

import {useHandleForgot} from "components/features/auth/forgot";

import {TextNavLink} from "../ui/text-nav-link";
import {Footer} from "../ui/footer";

import styles from './forgot-form.module.css'


export const ForgotForm = ()=>{
    const [state, onChange] = useForm({
        email: "",
    })
    const [onForgot, response] = useHandleForgot(state)

    return(
        <>
            {response.isLoading && <div>Loading...</div>}
            {response.data?.success &&
                <Navigate to={RoutesPath.reset}
                          state={{ sentEmail:  response.data?.success}} replace/>
            }
            <WarningText message={response.data?.message} extraClass="mt-6"/>
            <ErrorText message={response.error?.data?.message} extraClass="mt-6"/>
            <form onSubmit={onForgot} className={styles.container_form}>
                <EmailInput
                    placeholder={'Укажите e-mail'}
                    onChange={onChange}
                    value={state.email}
                    name={'email'}
                    size={'default'}
                    extraClass="mt-6"
                    required
                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="medium"
                    extraClass="mt-6"
                >
                    Восстановить
                </Button>
            </form>

            <Footer>
                <TextNavLink
                    pretext={'Вспомнили пароль?'}
                    to={RoutesPath.login}
                    text={'Войти'}
                />
            </Footer>
        </>
    )
}