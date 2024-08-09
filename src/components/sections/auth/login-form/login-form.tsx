import React from 'react'

import {Button, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components"

import {ErrorText} from "components/shared/ui/error-text/error-text";
import {EmailInput} from "components/shared/ui/email-input/email-input";
import {useForm} from "components/shared/hooks/useForm"
import {RoutesPath} from "components/shared/configs";

import {useHandleLogin} from "components/services/features/auth/login"

import {Footer} from "../ui/footer";
import {TextNavLink} from "../ui/text-nav-link";

import styles from './login-form.module.css'


export const LoginForm = ()=>{
    const [state, onChange] = useForm({
        email: "",
        password: "",
    })
    const [onLogin, response] = useHandleLogin(state)

    return(
        <>
            {response.isLoading && <div>Loading...</div>}
            <ErrorText message={response.error?.data?.message} extraClass="mt-6"/>
            <form onSubmit={onLogin} className={styles.container_form}>
                <EmailInput
                    placeholder={'E-mail'}
                    onChange={onChange}
                    value={state.email}
                    name={'email'}
                    size={'default'}
                    extraClass="mt-6"
                    required
                />
                <PasswordInput
                    placeholder={'Пароль'}
                    onChange={onChange}
                    value={state.password}
                    name={'password'}
                    extraClass="mt-6"
                    required
                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="medium"
                    extraClass="mt-6"
                >
                    Войти
                </Button>
            </form>

            <Footer>
                <TextNavLink
                    pretext={'Вы — новый пользователь?'}
                    to={RoutesPath.register}
                    text={'Зарегистрироваться'}
                />
                <TextNavLink
                    pretext={'Забыли пароль?'}
                    to={RoutesPath.forgot}
                    text={'Восстановить пароль'}
                    extraClass="mt-4"
                />
            </Footer>
        </>
    )
}