export interface IProduct{
    _id: string
    uuid?: string | null
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