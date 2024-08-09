export interface IUser{
    email: string
    name: string
}

export interface ITokens{
    accessToken: string  // include Bearer ...
    refreshToken: string
}

export interface ICrendentials extends ITokens{
    user:IUser
}

