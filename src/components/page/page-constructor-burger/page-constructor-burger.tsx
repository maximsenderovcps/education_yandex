import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import {BurgerIngredients} from "components/sections/ingredients-burger";
import {BurgerConstructor} from "components/sections/constructor-burger";

import styles from './page-constructor-burger.module.css'


export const PageConstructorBurger = () => {
    return(
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
    )
}