import {useCallback, useState} from "react";

type THandleClose = () => void;
type THandleOpen = () => void;
type TIsOpen = boolean;

export const useVisible = (isOpenDefault: boolean):[TIsOpen,THandleClose, THandleOpen] =>{
    const [isOpen, setVisible] = useState(isOpenDefault)

    const handleClose = useCallback((): void =>{
        setVisible(false)
    }, [])

    const handleOpen = useCallback((): void => {
        setVisible(true)
    }, [])

    return [isOpen, handleClose, handleOpen]
}