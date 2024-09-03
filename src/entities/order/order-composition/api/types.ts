export type TOrderBody = {
    number: number
}

export type TOrdersDto = {
    success: true
    orders:{
        name: string
        ingredients: string[]
        _id: string
        status: 'done' | 'created' | 'pending' | 'cancelled'
        number: number
        createdAt: string
        updatedAt: string
    }[]
}

export type TError = {
    success: false
    message: string
}