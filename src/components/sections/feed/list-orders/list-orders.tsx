import React, {useCallback, useEffect} from 'react'
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "components/services/providers/store";

import {ErrorText} from "components/shared/ui";
import {ROUTES} from "components/shared/configs";

import {
    ordersAllWSDisconnectAction,
    ordersAllWSStartAction,
    useSortOrders,
} from "entities/order";
import {OrderCard} from "entities/order/ui/order-card";
import {selectOrdersAll} from "entities/order";

import {useGetProductsQuery} from "entities/products";
import {ProductsShortComposition} from "entities/products/ui/products-short-composition";

import {CalcPrice} from "components/services/features/calc-price";

import styles from './list-orders.module.css'




export const ListOrders = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {isStreaming, data: {orders}, isError:isErrorWs, error:errorWs} = useAppSelector(selectOrdersAll)


    const {
        data: products = [],
        isError,
        error
    } = useGetProductsQuery()

    useEffect(()=>{

        !isStreaming && !isErrorWs && dispatch(ordersAllWSStartAction())

        return ()=>{
            isStreaming && dispatch(ordersAllWSDisconnectAction())
        }
    }, [dispatch, isStreaming, isErrorWs])


    const ordersSorted = useSortOrders(orders)

    const onClickCard = useCallback((number:number)=>{
        navigate(ROUTES.ORDER_IN_FEED.replace(':id', String(number)))
    }, [navigate])

    return(<>
        {
            isErrorWs ? <ErrorText message={errorWs} extraClass="mt-6"/> :
            isError ? <ErrorText message={(error as any)?.error} extraClass="mt-6"/> :
            products &&
                <section className={styles.box}>
                    {!!ordersSorted.length && ordersSorted.map((v) => {
                        return (
                            <OrderCard key={v.number} order={v}
                                onClick={onClickCard}
                                childrenComposition={
                                    <ProductsShortComposition ids={v.ingredients} products={products}/>
                                }
                               childrenCalcPrice={<CalcPrice ids={v.ingredients} products={products}/>}
                            />
                        )
                    })}
                </section>
        }
        </>
    )
}