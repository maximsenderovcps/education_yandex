import { FC } from 'react';

import {clx} from "components/shared/utils";

import cls from './error-text.module.css';


interface ErrorTextProps {
    extraClass?: string;
    message: string
}

export const ErrorText: FC<ErrorTextProps> = ({ extraClass, message }) => {

    return (<>{ message &&
        <div className={ clx('', [cls.alert, cls.alert_error, extraClass ?? '']) }>
            <p className="text text_type_main-default">Ошибка: {message}</p>
        </div>
    }</>);
};
