import React, {ChangeEvent, FormEvent, useState} from 'react'

import {Button, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components"

import {EditInput} from "components/shared/ui/edit-input/edit-input"
import {EmailInput} from "components/shared/ui/email-input/email-input"
import {ErrorText} from "components/shared/ui/error-text/error-text"
import {useForm} from "components/shared/hooks/useForm"

import {useGetProfileQuery} from "entities/profile";
import {useUpdateProfile} from "components/services/features/update-profile";

import styles from './profile-form.module.css'



export const ProfileForm = ()=> {
    const [toggleResetForm, setResetForm] = useState(false)
    const [visibleEditButtons, setVisibleEditButtons] = useState(false)

    const {data: profile, isLoading, error, refetch: refetchProfile} = useGetProfileQuery()

    const [state, onChange] = useForm(
        {
            name: '',
            email: '',
            password: '',
            ...profile
        }
    , [isLoading, toggleResetForm]);

    const [updateProfile, responseUpdate] = useUpdateProfile(state)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        await updateProfile(e)
        refetchProfile()
        setVisibleEditButtons(false)
    }

    const handleChange = (e:  ChangeEvent<HTMLInputElement>) => {
        onChange(e)
        if(!visibleEditButtons)
            setVisibleEditButtons(true)
    }

    const handleCancel = ()=>{
        setResetForm(!toggleResetForm)
        setVisibleEditButtons(false)
    }

    return (
        <>
            <ErrorText message={(error as any)?.data?.message} extraClass="mb-6"/>
            <ErrorText message={responseUpdate.error?.data?.message} extraClass="mb-6"/>
            <form onSubmit={handleSubmit} className={styles.container_form}>
                <EditInput
                    placeholder={'Имя'}
                    onChange={handleChange}
                    value={state.name}
                    name={'name'}
                    isIcon={true}
                    required
                />
                <EmailInput
                    placeholder={'E-mail'}
                    onChange={handleChange}
                    value={state.email}
                    name={'email'}
                    isIcon={true}
                    extraClass="mt-6"
                    required
                />
                <PasswordInput
                    placeholder={'Пароль'}
                    onChange={handleChange}
                    value={state.password}
                    name={'password'}
                    icon="EditIcon"
                    extraClass="mt-6"
                    required
                />
                {visibleEditButtons && <div className={styles.buttons}>
                    <Button
                        onClick={handleCancel}
                        htmlType="button"
                        type="secondary"
                        size="medium"
                        extraClass="mt-6"
                    >
                        Отмена
                    </Button>
                    <Button
                        htmlType="submit"
                        type="primary"
                        size="medium"
                        extraClass="mt-6"
                    >
                        Сохранить
                    </Button>
                </div>}
            </form>
        </>
    );
}