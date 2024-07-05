import {useCallback, useState} from "react";

type Close = () => void;
type Open = () => void;
type IsOpen = boolean;

export const useVisible = (isOpenDefault: boolean):[IsOpen, Close, Open] =>{
    const [isOpen, setVisible] = useState(isOpenDefault)

    const handleClose = useCallback(() =>{
        setVisible(false)
    }, [])

    const handleOpen = useCallback(() => {
        setVisible(true)
    }, [])

    return [isOpen, handleClose, handleOpen]
}