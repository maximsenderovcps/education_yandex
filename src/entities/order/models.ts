type TIngredientsIDs = string

export type TStatus = 'done' | 'created' | 'pending' | 'cancelled'

export interface IOrder{
    name: string
    ingredients: TIngredientsIDs[]
    _id: string
    status: TStatus
    number: number
    createdAt: string
    updatedAt: string
}


export interface IOrders{
    orders: IOrder[]
    total: number
    totalToday: number
}