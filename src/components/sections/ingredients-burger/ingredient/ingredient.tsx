import React, {FC} from "react";

import {clName} from "components/shared/utils";

import {IProduct} from "entities/products";

import styles from './ingredient.module.css'

interface IIngredientDetailsProps {
    details:  IProduct
}

export const IngredientDetails:FC<IIngredientDetailsProps> = ({details}) => {
    const content_caption_attribute = "text text_type_main-default text_color_inactive"
    const content_number_attribute = "text text_type_digits-default text_color_inactive"

    return (
        <>
            <p className={clName(styles.header, ["text text_type_main-large"])}>
                Детали ингредиента
            </p>
            <img className={styles.img}
                 src={details.image_large}
                 alt={'картинка продукта'}
            />
            <p className={clName(styles.title, ["text text_type_main-medium mt-4 mb-8"])}
               data-testid="ingredient-details_title"
            >
                {details.name}
            </p>
            <div className={clName(styles.content_content, ['mb-5'])}>
                <div className="mr-5">
                    <p className={content_caption_attribute}>Калории, ккал</p>
                    <p className={content_number_attribute}>{details.calories}</p>
                </div>
                <div className="mr-5">
                    <p className={content_caption_attribute}>Белки, г</p>
                    <p className={content_number_attribute}>{details.proteins}</p>
                </div>
                <div className="mr-5">
                    <p className={content_caption_attribute}>Жиры, г</p>
                    <p className={content_number_attribute}>{details.fat}</p>
                </div>
                <div>
                    <p className={content_caption_attribute}>Углеводы, г</p>
                    <p className={content_number_attribute}>{details.carbohydrates}</p>
                </div>
            </div>
        </>
    )
}