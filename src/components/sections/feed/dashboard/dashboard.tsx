import React, {useMemo} from "react";

import {useAppSelector} from "components/services/providers/store";

import {IOrder, selectOrdersAll, useSortOrders} from "entities/order";

import styles from './dashboard.module.css'




export const Dashboard = () => {
    const {
        data: {total, totalToday, orders},
    } = useAppSelector(selectOrdersAll)


    const ordersSorted = useSortOrders(orders)


    const ordersWithStatusDone = useMemo<JSX.Element[]>(()=> {
        const filtered = ordersSorted.filter((v)=> v.status === 'done').slice(0, 30)
        return filtered.map((v: IOrder) =>
            <span key={v.number} className="text text_type_digits-default mr-2 mb-2">{v.number}</span>
        )
    }, [ordersSorted])


    const ordersWithStatusPending = useMemo<JSX.Element[]>(()=> {
        const filtered = ordersSorted.filter((v)=> v.status === 'pending').slice(0, 30)
        return filtered.map((v: IOrder) =>
            <span key={v.number} className="text text_type_digits-default mr-2 mb-2">{v.number}</span>
        )
    }, [ordersSorted])


    return(
        <section className={styles.content}>
            <div className={styles.content_orders_with_statuses}>
                <div className={styles.content_orders_status_done}>
                    <p className="text text_type_main-medium pb-6">Готовы:</p>
                    <div className={styles.items_orders_status_done}>
                        {ordersWithStatusDone}
                    </div>
                </div>
                <div className={styles.content_orders_status_pending + " ml-9"}>
                    <p className="text text_type_main-medium pb-6">В работе:</p>
                    <div className={styles.items_orders_status_pending}>
                        {ordersWithStatusPending}
                    </div>
                </div>
            </div>
            <p className="text text_type_main-medium mt-15">Выполнено за все время:</p>
            <p className="text text_type_digits-large">{total}</p>
            <p className="text text_type_main-medium mt-15">Выполнено за сегодня:</p>
            <p className="text text_type_digits-large">{totalToday}</p>
        </section>
    )
}