import React from 'react'
import {useSelector} from "react-redux";

import {Spinner} from "components/shared/ui";

import {selectIsLoading} from "components/entities/spinner";
import {selectText} from "components/entities/spinner";



export const SpinnerWidget = () => {
    const isLoading = useSelector(selectIsLoading)
    const text = useSelector(selectText)

    return (
        <>
            {isLoading && <Spinner text={text}/>}
        </>
    )
}