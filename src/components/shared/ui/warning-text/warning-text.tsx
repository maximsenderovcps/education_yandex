import { FC } from 'react';

import {clx} from "components/shared/utils";

import cls from './warning.module.css';


interface ErrorTextProps {
    extraClass?: string;
    message: string
}

export const WarningText: FC<ErrorTextProps> = ({ extraClass, message }) => {

    return (<>{ message &&
        <div className={ clx('', [cls.alert, cls.alert_warn, extraClass ?? '']) }>
            <p className="text text_type_main-default">Внимание: {message}</p>
        </div>
    }</>);
};
