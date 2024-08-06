import {CrendentialsDto} from "./types";

import {ICrendentials} from "components/entities/session";


export function mapCrendentials(dto: CrendentialsDto): ICrendentials {
    return {
        accessToken: dto.accessToken,
        refreshToken: dto.refreshToken,
        user: dto.user
    } as ICrendentials
}