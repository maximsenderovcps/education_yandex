import {ChangeEvent, useCallback, useEffect, useState} from "react";



type TOnChange = (e: ChangeEvent<HTMLInputElement>) => void;
type TUseFormState =  {[key: string]: string | number}

export function useForm<Type extends TUseFormState>(
    initialState: Type,
    deps: ReadonlyArray<unknown> = [true]
): [Type, TOnChange] {
    const [state, setState] = useState<Type>(initialState)

    useEffect((): void =>{
        if (initialState)
            setState({...state, ...initialState})
    }, deps)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>):void=>{
        const name = e.target.name
        const value = e.target.value
        setState({...state, [name]: value})
    }, [state])

    return [state, onChange]
}