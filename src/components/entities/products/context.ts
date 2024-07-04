import { createContext } from "react";

export interface IProduct{
    _id: string
    name: string
    type:"bun" | "main" | "sauce"
    proteins: number
    fat: number
    carbohydrates: number
    calories:number
    price:number
    image:string
    image_mobile:string
    image_large:string
    __v: number;
}

export const ProductsContext = createContext<IProduct[]>([]);