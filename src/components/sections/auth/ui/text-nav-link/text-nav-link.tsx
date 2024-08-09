import React, {FC} from 'react'
import {ButtonLink} from "components/shared/ui";

// import styles from './text-nav-link.module.css'


interface TextNavLinkProps {
    pretext: string
    to: string
    text: string
    extraClass?: string
}

export const TextNavLink: FC<TextNavLinkProps> = ({pretext, to, text, extraClass}) => {
    return(
        <div className={extraClass}>
            <span className="text text_type_main-default text_color_inactive">
                {pretext}
            </span>
            <ButtonLink type="secondary" size="medium" to={to}>
                {text}
            </ButtonLink>
        </div>
    )
}