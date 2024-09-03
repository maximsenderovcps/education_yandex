import React, {FC, useMemo} from 'react'

import {ThumbnailInCircle} from "components/shared/ui";

import {IProduct} from "../../context";

import styles from './products-short-composition.module.css'




interface IProductsShortCompositionProps {
    ids: string[]
    products: IProduct[]
}


export const ProductsShortComposition:FC<IProductsShortCompositionProps> = ({ids, products}) => {

    const {bunImage, ingredientsImages} = useMemo(()=>{
        const initial = {bunImage: null as string | null , ingredientsImages: [] as string[]}

        if (products.length && ids.length)
            return ids.reduce((previousValue, currentValue, index: number) => {
                const product = products.find((p)=>p._id === currentValue)

                if (!product)
                    return previousValue

                if (product.type === 'bun')
                    previousValue.bunImage = product.image_mobile
                else
                    previousValue.ingredientsImages.push(product.image_mobile)

                return previousValue
            }
            , initial)

        return initial
    }, [products, ids])


    const thumbnailsOfIngredients = useMemo(()=>{
        if (bunImage)
            ingredientsImages.unshift(bunImage)

        const images: string[] | [] = ingredientsImages

        const maxShowItems = 6

        const notShowItems = images.length - maxShowItems
        const items = images.slice(0, maxShowItems)


        return items.map((v, index)=>
            <ThumbnailInCircle key={index}
                               image={v}
                               extraStyles={{zIndex: images.length - index}}
                               countOfHidden={notShowItems}
                               isShowCount={(notShowItems > 0) && (index === items.length-1)}
            />
        )
    },[bunImage, ingredientsImages])


    return(
        <>
            <div className={styles.content_images}>
                {thumbnailsOfIngredients}
            </div>
        </>
    )
}