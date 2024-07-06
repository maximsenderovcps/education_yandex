import {IProduct} from "../context";
import {ProductDto} from "./types";

export function mapProducts(dto: ProductDto): IProduct[] {
    return dto.data;
}