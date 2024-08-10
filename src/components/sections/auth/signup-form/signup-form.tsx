import React from 'react'

import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components"

import {ErrorText} from "components/shared/ui/error-text/error-text";
import {EmailInput} from "components/shared/ui/email-input/email-input";
import {useForm} from "components/shared/hooks/useForm";
import {RoutesPath} from "components/shared/configs"

import {useHandleRegister} from "components/services/features/auth/register"

import {Footer} from "../ui/footer";
import {TextNavLink} from "../ui/text-nav-link";

import styles from './signup-form.module.css'


export const SignupForm = ()=> {

    const [state, onChange] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const [onRegister, response] = useHandleRegister(state)

    return (
        <>
            {response.isLoading && <div>Loading...</div>}
            <ErrorText message={response.error?.data?.message} extraClass="mt-6"/>
            <form onSubmit={onRegister} className={styles.container_form}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={onChange}

                    value={state.name}
                    name={'name'}

                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="mt-6"
                    required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                />
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
                    Зарегистрироваться
                </Button>
            </form>
            <Footer>
                <TextNavLink
                    pretext={"Уже зарегистрированы?"}
                    to={RoutesPath.LOGIN}
                    text={'Войти'}
                />
            </Footer>
        </>
    );
}