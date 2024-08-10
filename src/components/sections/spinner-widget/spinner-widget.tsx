import React from 'react'

import {Spinner} from "components/shared/ui/spinner/spinner";

import {useAppSelector} from "components/services/providers/store";

import {selectIsLoading} from "entities/spinner";
import {selectText} from "entities/spinner";



export const SpinnerWidget = () => {
    const isLoading = useAppSelector(selectIsLoading)
    const text = useAppSelector(selectText)

    return (
        <>
            {isLoading && <Spinner text={text}/>}
        </>
    )
}