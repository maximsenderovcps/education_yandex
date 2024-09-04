import {IOrders} from "../models";



export type TOrdersAllOfUserState = {
    loading: boolean,
    isStreaming: boolean,
    data: IOrders,
    error: string,
    isError: boolean
}