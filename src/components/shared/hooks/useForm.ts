import {ChangeEvent, useCallback, useEffect, useState} from "react";


type OnChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

export function useForm<Type>(initialState: Type, deps?: any): [Type, OnChangeType] {
    const [state, setState] = useState<Type>(initialState)

    useEffect(()=>{
        if (initialState && deps)
            setState({...state, ...initialState})
    }, deps ? deps: [true])

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name
        const value = e.target.value
        setState({...state, [name]: value})
    }, [state])

    return [state, onChange]
}