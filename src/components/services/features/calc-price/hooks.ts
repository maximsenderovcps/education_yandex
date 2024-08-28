import {useMemo} from "react";

import {IProduct} from "entities/products";



export const useCalcPrice = (bunDoc:IProduct | null, ingredientsDocs:IProduct[]):number => {
    return useMemo<number>(():number => {
        let total = 0
        if (!(bunDoc) && !ingredientsDocs.length)
            return total

        if (bunDoc)
            total = bunDoc.price * 2

        if (ingredientsDocs.length)
            total = ingredientsDocs.reduce((previousValue: number, currentProd: IProduct): number => {
                previousValue += currentProd.price
                return previousValue
            }, total)

        return total
    }, [ingredientsDocs, bunDoc])
}