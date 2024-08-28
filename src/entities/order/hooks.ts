import {useMemo} from "react";

import {IOrder} from "./models";



export const useSortOrders = (orders: IOrder[]): IOrder[] => {
    return useMemo<IOrder[]>(()=>{
        let orders_buf = [...orders]
        return orders_buf.sort((a,b)=> -(a.number - b.number))
    }, [orders])
}