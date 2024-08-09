export interface RegisterBody{
    email: string, 
    password: string, 
    name: string 
}

export interface UserDto{
    email: string
    name: string
}

export interface TokensDto{
    accessToken: string  // include Bearer ...
    refreshToken: string
}

export interface CrendentialsDto extends TokensDto{
    user:UserDto
}