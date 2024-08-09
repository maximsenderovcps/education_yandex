import React, {FC, PropsWithChildren, useCallback} from "react";

import { useNavigate } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "components/services/providers/store";

import {clName} from "components/shared/utils";
import {Modal} from "components/shared/ui/modal/modal";
import {ErrorText} from "components/shared/ui/error-text/error-text";
import {useVisible} from "components/shared/hooks/useVisible";
import {RoutesPath} from "components/shared/configs";

import {selectIsAuthed} from "entities/session";
import {spinnerActions} from "entities/spinner";

import {selectSelectedProductsState} from "entities/basket";
import {usePostOrderMutation} from "components/services/features/order";

import CheckImage from 'images/check.png'
import styles from './order.module.css'


export const Order: FC<PropsWithChildren>= ({children}) =>{
    const [isOpen, handleClose, handleOpen] = useVisible(false)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const isAuthed = useAppSelector(selectIsAuthed)

    const {bun: selectedBun, ingredients: selectedIngredients} = useAppSelector(selectSelectedProductsState)
    const [postOrder, response]= usePostOrderMutation()

    const order_id = response.data?.number


    const handleFetch = useCallback(async ()=>{
        if (!isAuthed)
            navigate(RoutesPath.login)

        let ingredients = selectedIngredients.reduce((prev: string[], current:any): string[]=>{
            prev = prev.concat([current.id])
            return prev
        }, [] as string[])
        if (selectedBun)
            ingredients = ingredients.concat([selectedBun])

        if (ingredients.length) {
            dispatch(spinnerActions.start("Ваш заказ оформляется. Подождите..."))
            await postOrder({ingredients})
            handleOpen()
        }
    }, [selectedIngredients, selectedBun, handleOpen, postOrder, isAuthed, navigate])


    return(
        <>
            <div className={styles.click_children} onClick={handleFetch}>
                {response.isLoading && <span>Загрузка...</span>}{children}
            </div>
            { isOpen &&
                <Modal onClose={handleClose} extraClassContent="pt-20 pb-20">
                    <ErrorText message={(response?.error as any)?.data?.message} extraClass="mb-6"/>

                    <p className={'text text_type_digits-large'}>{order_id}</p>
                    <p className={'text text_type_main-medium mt-8'}>идентификатор заказа</p>
                    {response.isSuccess &&
                        <img className={clName(styles.img, ['mt-15', 'mb-15'])} src={CheckImage} alt={'check'}/>
                    }
                    <p className={'text text_type_main-default mb-2'}>Ваш заказ начали готовить</p>
                    <p className={'text text_type_main-default text_color_inactive'}>
                        Дождитесь готовности на орбитальной станции
                    </p>
                </Modal>
            }
        </>
    )
}