import React, { useRef, useState } from 'react';
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";


const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

interface TEmailInputInterface
    extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
    value: string;
    size?: 'default' | 'small';
    placeholder?: string;
    isIcon?: boolean;
    extraClass?: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const EmailInput: React.FC<TEmailInputInterface> = ({
    value,
    onChange,
    size = 'default',
    placeholder = 'E-mail',
    isIcon = false,
    extraClass = '',
    ...rest
}) => {
    const [fieldDisabled, setDisabled] = useState(isIcon);

    const [error, setError] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onIconClick = () => {
        setDisabled(false);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const validateField = (value: string) => {
        const isNotValidEmail = !validateEmail(value)
        setError(isNotValidEmail);
        if (isNotValidEmail)
            inputRef.current?.setCustomValidity("Адрес электронной почты должна быть такая: name@domen.rucom")
        else
            inputRef.current?.setCustomValidity("")
    };

    const onFocus = () => {
        setError(false);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value) {
            validateField(e.target.value);
        } else {
            setError(false);
        }
        isIcon && setDisabled(true);
    };
    return (
        <Input
            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} type="email"
            placeholder={placeholder}
            onChange={onChange}
            icon={isIcon ? 'EditIcon' : undefined}
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            error={error}
            disabled={fieldDisabled}
            onIconClick={onIconClick}
            size={size}
            extraClass={extraClass}
            {...rest}        />
    );
};
