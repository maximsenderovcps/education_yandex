import React, {FC} from 'react'

import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

import {clName} from "components/shared/utils";

import {IOrder} from "../../models";
import {StatusDictionary} from "../../maps";

import styles from './order-card.module.css'




interface IOrderCardProps {
    order: IOrder
    childrenComposition: React.ReactNode
    childrenCalcPrice: React.ReactNode
    onClick: (number: number)=>void
}


export const OrderCard:FC<IOrderCardProps> = ({
    order,
    childrenComposition,
    childrenCalcPrice,
    onClick
}) => {
    const date = new Date(order.createdAt)


    return(
        <div className={clName(styles.content, ['p-6'])}
            onClick={()=>onClick(order.number)}
        >
            <div className={styles.item_info}>
                <p className="text text_type_digits-default">#{order.number}</p>
                <FormattedDate className="text text_type_main-default text_color_inactive" date={date} />
            </div>
            <div className={clName(styles.item_info, ['pt-6'])}>
                <p className="text text_type_main-medium">{order.name}</p>
            </div>
            <div className={clName(styles.item_info, ['pt-2'])}>
                <p className={clName(
                    "text text_type_main-default",
                    [],
                    {[styles.text_status_done]: order.status==='done'})
                }>
                    {StatusDictionary[order.status]}
                </p>
            </div>
            <div className={clName(styles.item_info, ['pt-6'])}>
                {childrenComposition}
                {childrenCalcPrice}
            </div>
        </div>
    )
}