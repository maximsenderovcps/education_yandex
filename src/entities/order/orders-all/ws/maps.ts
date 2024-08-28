import {TOrdersDto} from "./types";
import {IOrders} from "../../models";




export function mapOrders(dto: TOrdersDto): IOrders {
    return {
        orders: dto.orders ? dto.orders : [],
        total: dto.total ? dto.total : 0,
        totalToday: dto.totalToday ? dto.totalToday : 0
    } as IOrders
}