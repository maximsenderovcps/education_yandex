import React, {FC, useMemo} from 'react'

import {clName} from "components/shared/utils";
import {PriceWithCurrency, ThumbnailInCircle} from "components/shared/ui";

import {IProduct} from "../../context";

import styles from './products-long-composition.module.css'




interface IProductsLongCompositionProps {
    ids: string[]
    products: IProduct[]
}

interface IProductWithCount extends IProduct{
    count: number
}


type TIngredientsDocs = {
    bunDoc: IProductWithCount | null ,
    ingredientsDoc: IProductWithCount[]
}


export const ProductsLongComposition:FC<IProductsLongCompositionProps> = ({ids, products}) => {

    const {bunDoc, ingredientsDoc} = useMemo<TIngredientsDocs>(()=>{
        const initial: TIngredientsDocs = {
            bunDoc: null ,
            ingredientsDoc: []
        }

        if (products.length && ids && ids.length) {
            const idsUnique = ids.filter((v, i, array) => array.indexOf(v) === i)

            return idsUnique.reduce((previousValue, currentValue, index: number) => {
                    const product = products.find((p) => p._id === currentValue)

                    if (!product)
                        return previousValue

                    if (product.type === 'bun')
                        previousValue.bunDoc = {...product, count: 2}
                    else {
                        const count = ids.filter((p) => p === currentValue).length
                        previousValue.ingredientsDoc.push({...product, count: count})
                    }

                    return previousValue
                }
                , initial)
        }
        return initial
    }, [products, ids])


    const cardPositions = useMemo<JSX.Element[]>(()=>{
        if (bunDoc)
            ingredientsDoc.unshift(bunDoc)

        const positions = ingredientsDoc as IProductWithCount[]

        return positions.map((v, index)=>
            <div key={index} className={styles.card_position}>
                <div className={styles.card_position_caption}>
                    <ThumbnailInCircle image={v.image_mobile}/>
                    <p className="text text_type_main-default ml-4">{v.name}</p>
                </div>
                <PriceWithCurrency price={`${v.count} x ${v.price}`} extraClassName="ml-4"/>
            </div>
        )
    }, [ingredientsDoc, bunDoc])


    return(
        <>
            <div className={clName(styles.content, [styles.box, "pr-6"])}>
                {cardPositions && cardPositions.length && cardPositions}
            </div>
        </>
    )
}