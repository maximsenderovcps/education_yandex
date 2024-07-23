import {useDrag} from "react-dnd";

export const useDragItem = (id: string, dragOfType: string) =>{

    const [{isDragging}, drag] = useDrag({
        type: dragOfType,
        item: () => {
            return {id}
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return [drag, isDragging]
}