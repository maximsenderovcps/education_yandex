import {OrderDto} from "./types";
import {IOrder} from "../models";

export function mapOrder(dto: OrderDto): IOrder {
    return dto.order
}