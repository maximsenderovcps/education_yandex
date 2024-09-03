import React, {FC, useMemo} from 'react'

import {PriceWithCurrency} from "components/shared/ui";

import {IProduct} from "entities/products";

import {useCalcPrice} from "../hooks";




interface ICalcPriceProps {
    ids: string[]
    products: IProduct[]

    size?: "medium" | "default" | "large" | undefined
}


export const CalcPrice:FC<ICalcPriceProps> = ({ids, products, size}) => {

    const {bunDoc, ingredientsDocs} = useMemo(()=>{
        const initial = {bunDoc: null as IProduct | null , ingredientsDocs: [] as IProduct[]}

        if (products.length && ids && ids.length)
            return ids.reduce((previousValue, currentValue, index: number) => {
                const product = products.find((p)=>p._id === currentValue)

                if (!product)
                    return previousValue

                if (product.type === 'bun')
                    previousValue.bunDoc = product
                else
                    previousValue.ingredientsDocs.push(product)

                return previousValue
            }
            , initial)

        return initial
    }, [products, ids])


    const totalPrice = useCalcPrice(bunDoc, ingredientsDocs)


    return(
        <>
            <PriceWithCurrency price={totalPrice} size={size}/>
        </>
    )
}