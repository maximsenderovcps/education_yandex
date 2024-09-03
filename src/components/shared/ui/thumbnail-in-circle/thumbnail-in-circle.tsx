import React, {FC} from "react";

import {clName} from "components/shared/utils";

import styles from './thumbnail-in-circle.module.css'



type TThumbnailInCircleProps = (
    {
        image: string
        extraStyles?: object
    }
) & ({
        countOfHidden: number
        isShowCount: boolean
    } | {
        countOfHidden?: undefined
        isShowCount?: undefined
    }
)

export const ThumbnailInCircle:FC<TThumbnailInCircleProps> = ({image, isShowCount, countOfHidden, extraStyles}) => {
    return (
        <div className={styles.images_border_wrap} style={extraStyles}>
            {
                (isShowCount) &&
                <>
                    <div className={styles.overlay}> </div>
                    <p className={clName(styles.digits_not_show_items, ["text text_type_main-default"])}>
                        +{countOfHidden}
                    </p>
                </>
            }
            <div className={styles.images_black_wrap}>
                <img
                    src={image}
                    alt={'ThumbnailInCircle'}
                />
            </div>
        </div>
    )
}