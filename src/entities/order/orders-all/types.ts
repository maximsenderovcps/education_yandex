import {IOrders} from "../models";

export type TOrdersAllState = {
    loading: boolean,
    isStreaming: boolean,
    data: IOrders,
    error: string,
    isError: boolean
}