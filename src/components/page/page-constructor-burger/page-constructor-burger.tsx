import React from "react";

import {BurgerIngredients} from "components/section/burger-ingredients";
import {BurgerConstructor} from "components/section/burger-constructor";

import styles from './page-constructor-burger.module.css'


export const PageConstructorBurger = () => {
    return(
        <section className={styles.page}>
            <p className={styles.title}>
                Соберите бургер
            </p>
            <div className={styles.ingredients_and_constructor}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </div>
        </section>
    )
}