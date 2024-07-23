import {useRef} from "react";
import {useDrop} from "react-dnd";

interface DragItem {
  id: string
}

export const useDropItem = (
    dragTypes: string[],
    onDrop: (id: string)=>void
) => {
    const dropRef = useRef<HTMLElement>(null)

    const [{canDrop}, drop] = useDrop<DragItem, void, { canDrop: boolean; }>({
        accept: dragTypes,
        collect(monitor) {
            return {
                canDrop: monitor.canDrop()
            }
        },
        drop(item: DragItem, monitor) {
            onDrop(item.id)
        },
    });

    drop(dropRef)

    return [dropRef, canDrop]
};
