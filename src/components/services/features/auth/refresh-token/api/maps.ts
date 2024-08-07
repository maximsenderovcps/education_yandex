import {RefreshTokenDto} from "./types";
import {ITokens} from "entities/session";


export function mapTokens(dto: RefreshTokenDto): ITokens {
    return {
        accessToken: dto.accessToken,
        refreshToken: dto.refreshToken
    } as ITokens
}