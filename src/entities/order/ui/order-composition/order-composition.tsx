import React, {FC} from "react";
import {FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

import {clName} from "components/shared/utils";

import {IOrder} from "../../models";
import {StatusDictionary} from "../../maps";

import styles from './order-composition.module.css'




interface IOrderCompositionProps {
    order: IOrder
    childrenPositions: React.ReactNode
    childrenCalcPrice: React.ReactNode
}

export const OrderComposition:FC<IOrderCompositionProps> = ({order, childrenPositions, childrenCalcPrice}) => {
    const date = new Date(order.createdAt)

    return (
        <>
            <p className="text text_type_digits-default">#{order.number}</p>
            <p className={clName(styles.name, ["text text_type_main-medium mt-10"])}>{order.name}</p>
            <p className={clName(
                "text text_type_main-default mt-3",
                [],
                {[styles.text_status_done]: order.status==='done'})
            }>
                {StatusDictionary[order.status]}
            </p>
            <p className="text text_type_main-medium mt-15 mb-6">Состав:</p>
            {childrenPositions}
            <div className={clName(styles.footer, ["mt-10"])}>
                <FormattedDate className="text text_type_main-default text_color_inactive" date={date} />
                {childrenCalcPrice}
            </div>
        </>
    )
}