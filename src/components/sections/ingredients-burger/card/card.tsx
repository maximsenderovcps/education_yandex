import React, {FC, useCallback} from "react";
import PropTypes from "prop-types";

import DefaultImage from "@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {clName} from "components/shared/utils";
import {useDragItem} from "components/shared/hooks";

import {useAppDispatch} from "components/services/providers/store";
import {IProduct} from "entities/products";
import {ingredientDetailsActions} from "entities/products/ingredient";

import styles from './card.module.css'

interface CardProps{
    id: string
    productType: string
    count?: number
    image?: string
    price: number
    caption: string

    extraClass?: string

    details: IProduct
}

export const Card: FC<CardProps> = (
    {
        id,
        productType,
        image = DefaultImage,
        extraClass = '',
        count = 0,
        details,
        ...props
    }
) => {
    const dispatch = useAppDispatch()
    const [dragRef] = useDragItem(id, productType)

    const handleClick = useCallback(()=>{
         dispatch(ingredientDetailsActions.add(details))
    }, [dispatch, details])


    let counterElement = undefined
    if (count)
        counterElement = <Counter count={count} size="default" extraClass="m-1" />

    return (
        <div className={clName(styles.card_content, [extraClass, styles.drag_place])}
             ref={dragRef}
             onClick={handleClick}
        >
            <div className={styles.image_content}>
                {counterElement}
                <img src={image}
                     alt={props.caption}
                     className={clName(styles.img, ['ml-4', 'mr-4'])}
                />
            </div>
            <div className={clName(styles.currency_content, ['mt-1', 'mb-1'])}>
                <span className="text text_type_digits-default p-2">{props.price}</span>
                <CurrencyIcon type="primary" />
            </div>

            <p className={clName(styles.caption, ['text', 'text_type_main-small'])}>{props.caption}</p>
        </div>
    )
}


Card.propTypes = {
    id: PropTypes.string.isRequired,
    productType: PropTypes.string.isRequired,
    count: PropTypes.number,
    price: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    image: PropTypes.string,
    extraClass: PropTypes.string,
    details: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf([
            "bun" as const,
            "main" as const,
            "sauce" as const
        ]).isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired
    }).isRequired
}