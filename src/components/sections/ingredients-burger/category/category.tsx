import React, {FC, PropsWithChildren} from "react";
import PropTypes from "prop-types";

import styles from './category.module.css'

interface CategoryProps{
    title: string
    extraClass?: string
}

export const Category: FC<PropsWithChildren<CategoryProps>> = (
   {
        title,
        extraClass = '',
        children
    }
) => {

return (
        <div className={extraClass}>
            <p className='text text_type_main-medium pb-2'>{title}</p>
            <div className={styles.items}>
                {children}
            </div>
        </div>
    )
};

Category.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    extraClass: PropTypes.string
}