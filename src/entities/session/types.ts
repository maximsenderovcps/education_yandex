import {ICrendentials} from "./models";

export type TSessionState = {
    isAuthed: boolean,
    isLoading: boolean,
    credentials: ICrendentials
}