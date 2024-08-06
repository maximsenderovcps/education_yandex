import React from 'react'

import {Overlay} from "../overlay/overlay";

import styles from './spinner.module.css'



export const Spinner = ({
    text= "Загрузка..."

}) => {
    return (
        <>
            <Overlay />
            <div className={styles.content}>

                <p className="text text_type_main-medium mb-1">{text}</p>
                <div className={styles.lds_spinner}>
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>
        </>
    )
}