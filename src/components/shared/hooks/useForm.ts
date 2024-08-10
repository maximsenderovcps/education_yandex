import {ChangeEvent, useCallback, useEffect, useState} from "react";


type TOnChange = (e: ChangeEvent<HTMLInputElement>) => void;

export function useForm<Type>(initialState: Type, deps: any[] = [true]): [Type, TOnChange] {
    const [state, setState] = useState<Type>(initialState)

    useEffect((): void =>{
        if (initialState)
            setState({...state, ...initialState})
    }, deps)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name
        const value = e.target.value
        setState({...state, [name]: value})
    }, [state])

    return [state, onChange]
}