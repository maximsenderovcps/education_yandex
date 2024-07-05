import React from "react";

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
                <BurgerIngredients/>
                <BurgerConstructor/>
            </div>
        </section>
    )
}