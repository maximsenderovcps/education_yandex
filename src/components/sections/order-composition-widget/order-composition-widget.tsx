import React, {FC} from 'react'

import {useGetProductsQuery} from "entities/products";
import {IOrder} from "entities/order";

import {OrderComposition} from "entities/order/ui/order-composition";
import {ProductsLongComposition} from "entities/products/ui/products-long-composition";

import {CalcPrice} from "components/services/features/calc-price";

// import styles from './order-composition-widget.module.css'

interface IOrderCompositionWidgetProps {
    order: IOrder
}


export const OrderCompositionWidget:FC<IOrderCompositionWidgetProps> = ({order}) => {
    const {
        data: products = [],
        isLoading,
        // isSuccess,
        // isError,
        // error
    } = useGetProductsQuery()

    return(
        <>{ !isLoading &&
            <OrderComposition order={order}
                              childrenPositions={<ProductsLongComposition ids={order.ingredients} products={products}/>}
                              childrenCalcPrice={<CalcPrice ids={order.ingredients} products={products}/>}
            />
        }
        </>
    )
}