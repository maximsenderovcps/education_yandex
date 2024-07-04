import React, {FC, SyntheticEvent} from "react";

import styles  from './button-link.module.css';


interface ButtonLinkProps extends React.PropsWithChildren<Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>> {
    active?: boolean
    type?: 'secondary' | 'primary';
    size?: 'small' | 'medium' | 'large';
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
    extraClass?: string;
    htmlType?: 'button' | 'submit' | 'reset';
}


export const ButtonLink: FC<ButtonLinkProps> = (props) =>{
    const {active, type, size, extraClass, htmlType, onClick, ...otherProps} = props

    const classNameOptional = styles[`buttonLink_type_${type}`] + ' ' +styles[`buttonLink_size_${size}`]
    const buttonStyle = styles.buttonLink+ ' ' +classNameOptional + ' ' + (active?styles.active:'') + ' ' + extraClass

    return(
        <button className={buttonStyle} type={htmlType} onClick={onClick} {...otherProps}>
            <div className={styles.caption}>
                {props.children}
            </div>
        </button>
    )
}

ButtonLink.defaultProps = {
    active: false,
    type: 'primary',
    size: 'small',
    onClick: ()=>{},
    extraClass: '',
    htmlType: 'button',
}