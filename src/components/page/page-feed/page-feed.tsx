import React from "react"

import {ListOrders} from "components/sections/feed/list-orders";
import {Dashboard} from "components/sections/feed/dashboard";

import styles from "./page-feed.module.css"
import { Outlet } from "react-router-dom";




export const PageFeed = () => {
    return(
        <>
            <Outlet />
            <section className={styles.page}>
                <p className={styles.title}>
                    Лента заказов
                </p>
                <div className={styles.content}>
                    <ListOrders/>
                    <Dashboard/>
                </div>
            </section>
        </>
    )
}