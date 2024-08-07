import React from "react";
import {Outlet, useMatch} from "react-router-dom";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import {RoutesPath} from "components/shared/configs";
import {useAppSelector} from "components/services/providers/store";
import {selectCurrentIngredientDetailsState} from "entities/products/ingredient";

import {BurgerIngredients} from "components/sections/ingredients-burger";
import {BurgerConstructor} from "components/sections/constructor-burger";

import styles from './page-constructor-burger.module.css'

export const BurgerConstructorPage = () => {
    const isModalMatch = Boolean(useMatch(RoutesPath.ingredient_detail))
    const {isOpen: isOpenModal} = useAppSelector(selectCurrentIngredientDetailsState)

    return(
        <>
            {/*IngredientDetailsPage*/}
            <Outlet/>
            {(!isModalMatch || isOpenModal) &&
                <section className={styles.page}>
                    <p className={styles.title}>
                        Соберите бургер
                    </p>
                    <div className={styles.ingredients_and_constructor}>
                        <DndProvider backend={HTML5Backend}>
                            <BurgerIngredients/>
                            <BurgerConstructor/>
                        </DndProvider>
                    </div>
                </section>
            }
        </>
    )
}