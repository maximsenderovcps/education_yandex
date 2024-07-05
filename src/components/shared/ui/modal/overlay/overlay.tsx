import React from "react";

import styles from './overlay.module.css'

export const Overlay = (props: { onClick: () => void }) => {
    return (
        <div className={styles.overlay} onClick={props.onClick}>
        </div>
    )
}