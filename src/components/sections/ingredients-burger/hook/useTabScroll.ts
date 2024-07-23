import {MutableRefObject, RefObject,
        useCallback, useEffect, useRef, useState} from "react";

import {intersectRect} from "components/shared/utils";
import {defaultRectShift} from "components/shared/utils/math/intersect";


export const useTabScroll = (defaultTabName: string, shiftBox=0):
    [
        string, RefObject<HTMLDivElement>,
        MutableRefObject<Record<string, HTMLDivElement>>,
        ((tabName: string) => void)
    ] => {

    const [currentTab, setCurrentTab] = useState(defaultTabName)
    const scrollRef = useRef<HTMLDivElement>(null)
    const categoriesRefs = useRef<Record<string, HTMLDivElement>>({} as any);

    const onClickTabCategory = useCallback((tabName: string) => {
        setCurrentTab(tabName)
        categoriesRefs.current[tabName].scrollIntoView({block: "start", behavior: "smooth"});
    }, [categoriesRefs])


    const handleScroll = useCallback((e: Event) => {
        if (scrollRef.current) {
            const scrollBox = scrollRef.current.getBoundingClientRect()
            for (const tabName in categoriesRefs.current) {
                const categoryElement = categoriesRefs.current[tabName]
                const categoryRect = categoryElement.getBoundingClientRect()
                const shift = {...defaultRectShift}
                shift.r1.y = shiftBox
                const isIntersect = intersectRect(scrollBox, categoryRect, shift)

                if (isIntersect) {
                    setCurrentTab(tabName)
                    break
                }
            }

        }
    }, [categoriesRefs, shiftBox])

    useEffect(() => {
        const memScrollRef = scrollRef.current

        if(scrollRef.current)
            scrollRef.current.addEventListener('scroll', handleScroll)

        return () => {
            memScrollRef && memScrollRef.removeEventListener('scroll', handleScroll)
        }
    }, [scrollRef, handleScroll])

    return [currentTab, scrollRef, categoriesRefs, onClickTabCategory]
};