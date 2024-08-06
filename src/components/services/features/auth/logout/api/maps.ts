import {LogoutDto} from "./types";


export function mapResponse(dto: LogoutDto): LogoutDto {
    return {
        message: dto.message
    }
}