import React from 'react'
import {useSelector} from "react-redux";

import {Spinner} from "components/shared/ui/spinner/spinner";

import {selectIsLoading} from "entities/spinner";
import {selectText} from "entities/spinner";



export const SpinnerWidget = () => {
    const isLoading = useSelector(selectIsLoading)
    const text = useSelector(selectText)

    return (
        <>
            {isLoading && <Spinner text={text}/>}
        </>
    )
}