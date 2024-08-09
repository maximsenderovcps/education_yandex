import {ForgotDto} from "./types";


export function mapResponse(dto: ForgotDto): ForgotDto {
    return {
        success: dto.success,
        message: dto.message
    }
}