import React, {FC, KeyboardEvent, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {className} from "components/shared/utils";

import {Overlay} from "./overlay/overlay";

import styles from './modal.module.css'


const modalRoot = document.getElementById("react-modals")!;
const bodyElement = document.getElementsByTagName("body")[0]!;


interface ModalProps{
    onClose: (() => void)
    extraClassContent?: string
}

export const Modal: FC<React.PropsWithChildren<ModalProps>> = ({
    onClose,
    extraClassContent= '',
    children, ...props
}) => {

    const bodyRef = useRef(bodyElement)
    const modalRef= useRef<HTMLDivElement>(null)

    useEffect(() => {
        bodyRef.current.style.overflow = 'hidden'
        modalRef.current?.focus()

        return () => {
            bodyRef.current.style.overflow = ''
        }
    }, [bodyRef])

    const handleCloseByKeyDown = (e:KeyboardEvent<HTMLInputElement>) =>{
        if (e.code === 'Escape')
            onClose()
    }

    // const handleClose = () =>{
    //     onClose()
    // }

    return ReactDOM.createPortal(
        (
            <>
                <Overlay onClick={onClose}/>
                <div className={styles.modal}
                     onKeyDown={handleCloseByKeyDown}
                     ref={modalRef}
                     tabIndex={-1}
                >
                    <div className={className(styles.modal_dialog, ['p-10'])}>
                        <div className={styles.close_icon_content}>
                            <CloseIcon type="primary" onClick={onClose}/>
                        </div>
                        <div className={className(styles.modal_content, [extraClassContent])}>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        ),
        modalRoot
    );
};