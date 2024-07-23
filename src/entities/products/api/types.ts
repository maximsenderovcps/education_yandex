import {IProduct} from "../context";

export type ProductDto = {
    success: boolean
    data: IProduct[]
}