export interface ISetIngredient{
    uuid: string
    id: string
}

export interface IBasket{
    bun: string | null
    ingredients: ISetIngredient[]
}