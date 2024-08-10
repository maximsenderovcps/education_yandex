import {ConnectDragSource, DragSourceMonitor, useDrag} from "react-dnd";

export const useDragItem = (id: string, dragOfType: string): [ConnectDragSource, boolean] =>{

    const [{isDragging}, drag] = useDrag({
        type: dragOfType,
        item: () => {
            return {id}
        },
        collect: (monitor: DragSourceMonitor<{id: string}, unknown>) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return [drag, isDragging]
}