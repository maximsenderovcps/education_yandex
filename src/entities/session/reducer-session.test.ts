import {initialState, slice} from "./slice";
import {TSessionState} from "./types";
import {ICrendentials, ITokens} from "./models";


describe('Test reducer session', ()=>{
    it('should return the default initialState', ()=>{
        expect(slice.reducer(undefined, {type: undefined}))
            .toEqual(initialState)

        expect(slice.reducer(undefined, slice.actions.logout()))
            .toEqual(initialState)
    })

    test('action loading', ()=>{
        const expected: TSessionState = {
                ...initialState,
                isLoading: true
        }

        expect(slice.reducer(undefined, slice.actions.loading()))
            .toEqual(expected)
    })

    test('action login', ()=>{
        const actual: ICrendentials = {
            accessToken: "accessToken",
            refreshToken: "refreshToken",
            user: {
                email: "email@mail.ru",
                name: "I"
            }
        }

        const expected: TSessionState = {
            isLoading: false,
            isAuthed: true,
            credentials: {
                accessToken: "accessToken",
                refreshToken: "refreshToken",
                user: {
                    email: "email@mail.ru",
                    name: "I"
                }
            }
        }

        expect(slice.reducer(undefined, slice.actions.login(actual)))
            .toEqual(expected)
    })

    test('action refresh', ()=>{
        const stateMock: TSessionState = {
            isLoading: true,
            isAuthed: true,
            credentials: {
                accessToken: "old accessToken",
                refreshToken: "refreshToken",
                user: {
                    email: "email@mail.ru",
                    name: "I"
                }
            }
        }

        const actual: ITokens = {
            accessToken: "new accessToken", refreshToken: "refreshToken"
        }

        const expected: TSessionState = {
            ...stateMock,
            isLoading: false,
            credentials:{
                ...stateMock.credentials,
                accessToken:  "new accessToken"
            }
        }

        expect(slice.reducer(stateMock, slice.actions.refresh(actual)))
            .toEqual(expected)
    })
})