import React, {FC, SyntheticEvent, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {clName} from "components/shared/utils";

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
    const modalRef= useRef<HTMLDialogElement>(null)
    const bodyRef = useRef(bodyElement)

    useEffect(() => {
        bodyRef.current.style.overflow = 'hidden'
        modalRef.current?.showModal()
        modalRef.current?.focus()

        const handleCloseByKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Escape')
                onClose()
        }

        window.addEventListener('keyup', handleCloseByKeyDown )

        return () => {
            bodyRef.current.style.overflow = ''
            window.removeEventListener('keyup', handleCloseByKeyDown )
        }
    }, [bodyRef, modalRef])

    const handleClose = (e?: SyntheticEvent<HTMLDialogElement>) =>{
        onClose()
        modalRef.current?.close()
    }

    const handleClickBackdrop = (e: any) =>{
        const rect = e?.currentTarget.getBoundingClientRect();
        if (rect)
            if (e?.clientY < rect.top || e?.clientY > rect.bottom ||
                e?.clientX < rect.left || e?.clientX > rect.right) {
                modalRef.current?.close();
                onClose()
            }
    }

    return ReactDOM.createPortal(
        (
            <>
                <dialog className={styles.modal}
                    onClick={handleClickBackdrop}
                    onClose={handleClose}
                    //onKeyPress={handleCloseByKeyDown}
                    ref={modalRef}
                >
                    <div className={clName(styles.modal_dialog, ['p-10'])}>
                        <div className={styles.close_icon_content}>
                            <CloseIcon type="primary" onClick={handleClose}/>
                        </div>
                        <div className={clName(styles.modal_content, [extraClassContent])}>
                            {children}
                        </div>
                    </div>
                </dialog>
            </>
        ),
        modalRoot
    );
};