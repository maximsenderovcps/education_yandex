import React, { useRef, useState } from 'react';
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";


interface TEditInputInterface
    extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
    value: string;
    size?: 'default' | 'small';
    placeholder?: string;
    isIcon?: boolean;
    extraClass?: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const EditInput: React.FC<TEditInputInterface> = ({
    value,
    onChange,
    size = 'default',
    placeholder = 'Edit',
    isIcon = false,
    extraClass = '',
    ...rest
}) => {
    const [fieldDisabled, setDisabled] = useState(isIcon);
    const inputRef = useRef<HTMLInputElement>(null);

    const onIconClick = () => {
        setDisabled(false);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        isIcon && setDisabled(true);
    };

    return (
        <Input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            icon={isIcon ? 'EditIcon' : undefined}
            value={value}
            ref={inputRef}
            disabled={fieldDisabled}
            onIconClick={onIconClick}
            onBlur={onBlur}
            size={size}
            extraClass={extraClass}
            {...rest}
        />
    );
};
