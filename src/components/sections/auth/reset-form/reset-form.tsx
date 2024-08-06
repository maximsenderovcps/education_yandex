import React from 'react'
import {Navigate, useLocation} from "react-router-dom";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components"

import {RoutesPath} from "components/shared/configs";
import {ErrorText, WarningText} from "components/shared/ui";
import {useForm} from "components/shared/hooks";

import {useHandleReset} from "components/features/auth/reset";

import {TextNavLink} from "../ui/text-nav-link";
import {Footer} from "../ui/footer";

import styles from './reset-form.module.css'


export const ResetForm = ()=>{
    const {state: stateLocation} = useLocation()
    const [state, onChange] = useForm({
        password: "",
        token: "",
    })
    const [onReset, response] = useHandleReset(state)

    return(
        <>
            {response.isLoading && <div>Loading...</div>}
            {stateLocation?.sentEmail ||
                <Navigate to={RoutesPath.forgot} replace/>
            }
            <WarningText message={response.data?.message} extraClass="mt-6"/>
            <ErrorText message={response.error?.data?.message} extraClass="mt-6"/>
            <form onSubmit={onReset} className={styles.container_form}>

                <PasswordInput
                    placeholder={'Введите новый пароль'}
                    onChange={onChange}
                    value={state.password}
                    name={'password'}
                    extraClass="mt-6"
                    required
                />
                <Input
                  type={'text'}
                  placeholder={'Введите код из письма'}
                  onChange={onChange}

                  value={state.token}
                  name={'token'}
                  extraClass="mt-6"
                  required
                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="medium"
                    extraClass="mt-6"
                >
                    Сохранить
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