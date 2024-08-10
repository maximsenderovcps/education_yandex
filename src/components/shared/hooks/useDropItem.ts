import React, {useRef} from "react";
import {useDrop} from "react-dnd";

interface IDragItem {
  id: string
}

export const useDropItem = (
    dragTypes: string[],
    onDrop: (id: string)=>void
):[React.RefObject<HTMLDivElement>, boolean] => {
    const dropRef = useRef<HTMLDivElement>(null)

    const [{canDrop}, drop] = useDrop<IDragItem, void, { canDrop: boolean; }>({
        accept: dragTypes,
        collect(monitor) {
            return {
                canDrop: monitor.canDrop()
            }
        },
        drop(item: IDragItem, monitor) {
            onDrop(item.id)
        },
    });

    drop(dropRef)

    return [dropRef, canDrop]
};
