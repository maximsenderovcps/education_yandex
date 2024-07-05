import React, {FC} from "react";
import PropTypes from "prop-types";

import DefaultImage from "@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {className} from "components/shared/utils";

import styles from './card.module.css'

interface CardProps{
    count?: number
    image?: string
    price: number
    caption: string

    extraClass?: string
}

export const Card: FC<CardProps> = (
    {
        image = DefaultImage,
        extraClass = '',
        count = 0,
        ...props
    }
) => {
    let counterElement = undefined
    if (count)
        counterElement = <Counter count={count} size="default" extraClass="m-1" />

    return (
        <div className={className(styles.card_content, [extraClass])}>
            <div className={styles.image_content}>
                {counterElement}
                <img src={image}
                     alt={props.caption}
                     className={className(styles.img, ['ml-4', 'mr-4'])}
                />
            </div>
            <div className={className(styles.currency_content, ['mt-1', 'mb-1'])}>
                <span className="text text_type_digits-default p-2">{props.price}</span>
                <CurrencyIcon type="primary" />
            </div>

            <p className={className(styles.caption, ['text', 'text_type_main-small'])}>{props.caption}</p>
        </div>
    )
}

Card.propTypes = {
    count: PropTypes.number,
    price: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    image: PropTypes.string,
    extraClass: PropTypes.string
}