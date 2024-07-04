import {FC, PropsWithChildren} from "react";

import {useVisible} from "components/shared/hooks";
import {Modal} from "components/shared/ui";

import {IProduct} from "components/entities/products";
import {className} from "components/shared/utils";

import styles from './ingredient.module.css'


interface IngredientProps{
    detail: IProduct
}

export const Ingredient: FC<PropsWithChildren<IngredientProps>> = (
    {
        detail,
        children
    }
) => {
    const [isOpen, handleClose, handleOpen] = useVisible(false)

    const content_caption_attribute = "text text_type_main-default text_color_inactive"
    const content_number_attribute = "text text_type_digits-default text_color_inactive"

    return (
        <>
            <div className={styles.click_children} onClick={handleOpen}>
                {children}
            </div>
            {isOpen &&
                <Modal onClose={handleClose} extraClassContent="pb-5">
                    <p className={className(styles.header, ["text text_type_main-large"])}>
                        Детали ингредиента
                    </p>
                    <img className={styles.img}
                         src={detail.image}
                         alt={'картинка продукта'}
                    />
                    <p className={"text text_type_main-medium mt-4 mb-8"}>
                        {detail.name}
                    </p>
                    <div className={className(styles.content_content, ['mb-5'])}>
                        <div className="mr-5">
                            <p className={content_caption_attribute}>Калории, ккал</p>
                            <p className={content_number_attribute}>{detail.calories}</p>
                        </div>
                        <div className="mr-5">
                            <p className={content_caption_attribute}>Белки, г</p>
                            <p className={content_number_attribute}>{detail.proteins}</p>
                        </div>
                        <div className="mr-5">
                            <p className={content_caption_attribute}>Жиры, г</p>
                            <p className={content_number_attribute}>{detail.fat}</p>
                        </div>
                        <div>
                            <p className={content_caption_attribute}>Углеводы, г</p>
                            <p className={content_number_attribute}>{detail.carbohydrates}</p>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
};