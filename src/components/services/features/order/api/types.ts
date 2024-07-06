export interface IngredientsBody{
    ingredients: string[]
}

export type OrderDto = {
    success: boolean
    name: string
    order:{
        "number": number
    }
}