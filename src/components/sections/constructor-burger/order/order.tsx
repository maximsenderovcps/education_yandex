import React, {FC, PropsWithChildren} from "react";

import {className} from "components/shared/utils";
import {Modal} from "components/shared/ui";
import {useVisible} from "components/shared/hooks";

import CheckImage from 'images/check.png'
import styles from './order.module.css'



export const Order: FC<PropsWithChildren>= ({children}) =>{
    const [isOpen, handleClose, handleOpen] = useVisible(false)
    const order_id = '034536'

    return(
        <>
            <div className={styles.click_children} onClick={handleOpen}>
                {children}
            </div>
            { isOpen &&
                <Modal onClose={handleClose} extraClassContent="pt-20 pb-20">
                    <p className={'text text_type_digits-large'}>{order_id}</p>
                    <p className={'text text_type_main-medium mt-8'}>идентификатор заказа</p>
                    <img className={className(styles.img, ['mt-15', 'mb-15'])} src={CheckImage} alt={'check'}/>
                    <p className={'text text_type_main-default mb-2'}>Ваш заказ начали готовить</p>
                    <p className={'text text_type_main-default text_color_inactive'}>
                        Дождитесь готовности на орбитальной станции
                    </p>
                </Modal>
            }
        </>
    )
}