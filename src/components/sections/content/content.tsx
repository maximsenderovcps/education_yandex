import React, {FC, ReactNode} from "react";

import styles from './content.module.css'

interface ContentProps{
    children?: ReactNode
}


export const Content:FC<ContentProps>=(props)=>{
    return(
        <main className={styles.content + ' p-10'}>
            {props.children}
        </main>
    )
}