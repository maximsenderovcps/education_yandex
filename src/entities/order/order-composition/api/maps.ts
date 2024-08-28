import {TOrdersDto} from "./types";
import {IOrder} from "../../models";


export function mapResponse(dto: TOrdersDto): IOrder {
    const order = dto.orders[0]

    return {
        _id: order?._id,
        ingredients: order?.ingredients ? order?.ingredients : [],
        name: order?.name,
        number: order?.number,
        status: order?.status,
        createdAt: order?.createdAt,
        updatedAt: order?.updatedAt
    } as IOrder
}