export interface RefreshTokenBody{
    token: string
}

export type RefreshTokenDto = {
    success: boolean
    accessToken: string  // "Bearer ...",
    refreshToken: string
};
