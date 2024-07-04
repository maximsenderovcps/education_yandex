import React, {FC} from "react";
import PropTypes from "prop-types";

import DefaultImage from "@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './card.module.css'

interface CardProps{
    count?: number
    image?: string
    price: number
    caption: string

    extraClass?: string
}

//to entities
export const Card: FC<CardProps> = (props) => {
    let counterElement = undefined
    if (props.count)
        counterElement = <Counter count={props.count} size="default" extraClass="m-1" />

    return (
        <div className={styles.card_content +' '+ props.extraClass}>
            <div className={styles.image_content}>
                {counterElement}
                <img src={props.image}
                     alt={props.caption}
                     className={styles.img + ' ml-4 mr-4'}
                />
            </div>
            <div className={styles.currency_content + ' mt-1 mb-1'}>
                <span className="text text_type_digits-default p-2">{props.price}</span>
                <CurrencyIcon type="primary" />
            </div>

            <p className={styles.caption + ' text text_type_main-small'}>{props.caption}</p>
        </div>
    )
}

Card.defaultProps = {
    image: DefaultImage,
    extraClass: '',
    count: 0
}

Card.propTypes = {
    count: PropTypes.number,
    price: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    image: PropTypes.string,
    extraClass: PropTypes.string
}