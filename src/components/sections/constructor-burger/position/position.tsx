import React, {FC, useCallback} from "react";

import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import DefaultImage from "@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png";

import {useDragDropItem} from "components/shared/hooks/useDragDropItem";
import {useAppDispatch} from "components/services/providers/store";
import {basketActions} from "entities/basket";

import styles from './position.module.css'

interface CardPositionProps{
    id: string;
    index: number;
    uuid: string;
    typeProduct: string;
    text: string;
    thumbnail?: string;
    price: number;
    type?: 'top' | 'bottom';
    isLocked?: boolean;
    extraClass?: string;
}

export const CardPosition: FC<CardPositionProps> = (
    {
        id, index, uuid, typeProduct,
        thumbnail= DefaultImage,
        isLocked = false,
        ...props
    }
)=>{
    const dispatch = useAppDispatch()

    const handleMoveItem = useCallback((fromUUID: string, toIndex: number)=>{
        dispatch(basketActions.move({fromUUID, toIndex}))
    }, [dispatch])

    const handleDelete = useCallback(()=>{
        dispatch(basketActions.delete(index))
    }, [dispatch, index])

    const [dragRef, dropRef, isDragging] = useDragDropItem(
        ['sauce+constructor', 'main+constructor'],
        id,
        index,
        uuid,
        `${typeProduct}+constructor`,
        handleMoveItem
    )

    let extraDragDropProps: {ref?: (typeof dropRef)} = {ref: dropRef}

     if (isLocked)
        extraDragDropProps = {}

    const opacity = isDragging ? 0.2 : 1

    return(
        <div className={styles.content} style={{opacity}} {...extraDragDropProps}>
            <span className={styles.drag_place}>
                {!isLocked && <span ref={dragRef}><DragIcon type="primary"/></span>}
            </span>

            <ConstructorElement
                thumbnail={thumbnail as string}
                isLocked={isLocked}
                handleClose={handleDelete}
                {...props}
            />

        </div>
    )
}