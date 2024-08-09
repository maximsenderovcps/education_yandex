import React, {FC, HTMLProps, SyntheticEvent} from "react";

import { NavLink, useMatch } from "react-router-dom";

import {
    BurgerIcon,
    ListIcon,
    ProfileIcon,} from "@ya.praktikum/react-developer-burger-ui-components";

import {clName} from "components/shared/utils";

import styles  from './button-link.module.css';

// LightIcons
type IconType = 'burger' | 'list' | 'profile'
const LightIcons = {
    burger: BurgerIcon,
    list: ListIcon,
    profile: ProfileIcon,
}

interface ButtonLinkProps extends Omit<HTMLProps<HTMLLinkElement>, 'type' | 'size'> {
    active?: boolean
    type?: 'secondary' | 'primary'
    size?: 'small' | 'medium' | 'large'
    to?: string
    onClick?: (() => void) | ((e: SyntheticEvent) => void)
    extraClass?: string
    isParentLink?: boolean

    icon?: IconType
}

export const ButtonLink: FC<ButtonLinkProps> = (
    {
        active = false,
        type = 'primary',
        size = 'small',
        extraClass = '',
        to = '#',
        onClick = () => {
        },
        isParentLink = false,
        children,
        icon = null,
        ...otherProps
    }) => {
    const isMatch = Boolean(useMatch(to)) // without isParentLink

    const buttonStyle = clName(styles.buttonLink, [
        styles[`buttonLink_type_${type}`],
        styles[`buttonLink_size_${size}`]
    ], {
        [styles.active]: active,
        [extraClass]: extraClass
    })

    const LightIcon = icon ? LightIcons[icon]({type: isMatch ? "primary": "secondary"}) : null

    return (
        <NavLink className={
            ({isActive, isPending}): string => isActive ? clName(buttonStyle, [styles.active]) : buttonStyle
        } onClick={onClick} to={to} end={!isParentLink}>
            <div className={styles.caption}>
                {LightIcon}{children}
            </div>
        </NavLink>
    )
};