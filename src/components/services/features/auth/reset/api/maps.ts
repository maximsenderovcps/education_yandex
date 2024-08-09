import {ResetDto} from "./types";


export function mapResponse(dto: ResetDto): ResetDto {
    return {
        success: dto.success,
        message: dto.message
    }
}