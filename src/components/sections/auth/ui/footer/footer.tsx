import React, {FC, PropsWithChildren} from "react";
import styles from "./footer.module.css";


export const Footer:FC<PropsWithChildren>= ({children})=>{
    return(
        <div className={styles.footer + " mt-20"}>
            {children}
        </div>
    )
}