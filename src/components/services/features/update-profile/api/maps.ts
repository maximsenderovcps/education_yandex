import {IUserProfile} from "entities/profile";

import {ProfileDto} from "./types";


export function mapResponse(dto: ProfileDto): IUserProfile {
    return {
        email: dto.user.email,
        name: dto.user.name
    } as IUserProfile
}