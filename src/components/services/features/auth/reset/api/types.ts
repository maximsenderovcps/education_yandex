export interface ResetBody{
    password: string
    token: string
}

export interface ResetDto {
    success: boolean
    message: string // "Password successfully reset"
}