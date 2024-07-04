import React, {FC, ReactNode} from "react";
import PropTypes from "prop-types";

import styles from './category.module.css'

interface CategoryProps{
    title: string
    children: ReactNode
    extraClass?: string
}

export const Category:FC<CategoryProps> = (props) => {
    return(
        <div className={props.extraClass}>
            <p className='text text_type_main-medium pb-2'>{props.title}</p>
            <div className={styles.items}>
                {props.children}
            </div>
        </div>
    )
}

Category.defaultProps={
    extraClass: ''
}

Category.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    extraClass: PropTypes.string
}