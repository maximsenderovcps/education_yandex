import React, {useCallback, useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from "components/services/providers/store";

import {ROUTES} from "components/shared/configs";
import {ErrorText} from "components/shared/ui";

import {
    ordersAllOfUserWSDisconnectAction,
    ordersAllOfUserWSStartAction,
    useSortOrders
} from "entities/order";
import {OrderCard} from "entities/order/ui/order-card";
import {selectOrdersAllOfUser} from "entities/order";

import {useGetProductsQuery} from "entities/products";
import {ProductsShortComposition} from "entities/products/ui/products-short-composition";

import {CalcPrice} from "components/services/features/calc-price";

import styles from './list-orders.module.css'




export const ListOrders = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {isStreaming, data: {orders}, isError:isErrorWs, error:errorWs} = useAppSelector(selectOrdersAllOfUser)

    const {
        data: products = [],
        isError,
        error
    } = useGetProductsQuery()

    useEffect(()=>{

        !isStreaming && !isErrorWs && dispatch(ordersAllOfUserWSStartAction())

        return ()=>{
            isStreaming && dispatch(ordersAllOfUserWSDisconnectAction())
        }
    }, [dispatch, isStreaming, isErrorWs])


    const ordersSorted = useSortOrders(orders)

    const onClickCard = useCallback((number:number)=>{
        navigate(ROUTES.ORDER_IN_PROFILE.replace(':id', String(number)))
    }, [navigate])

    return(<>
            <Outlet/>
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