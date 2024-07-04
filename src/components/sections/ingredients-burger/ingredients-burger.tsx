import React, {useContext, useRef, useState} from "react"

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import {Category} from "./category/category";
import {Card} from "./card/card";

import {ProductsContext} from "components/entities/products";

import styles from './ingredients-burger.module.css'
import {Ingredient} from "./ingredient/ingredient";

export const IngredientsBurger = () => {
    const [current, setCurrent] = useState('bun')
    const classRefs = useRef({} as any);

    const data = useContext(ProductsContext)
    const classData = [
        {
            name: 'bun',
            lang: 'Булки'
        },{
            name: 'sauce',
            lang: 'Соусы'
        },{
            name: 'main',
            lang: 'Начинки'
        },
    ]

    const OnClickTabCategory = (tabName: string)=>{
        setCurrent(tabName)
        classRefs.current[tabName].scrollIntoView({ block: "start",  behavior: "smooth" });
    }

    const productsElements = classData && classData.map((category, index)=>{
        const productsOfCat = data && data.filter((v)=>v.type===category.name)

        return (<React.Fragment key={category.name}>
            <div ref={el => classRefs.current[category.name] = el }> </div>
            <Category  title={category.lang} extraClass={'mb-10'}>
                {
                    productsOfCat.map((prod => {
                        return (
                            <Ingredient key={prod._id} detail={prod}>
                                <Card
                                    count={1}
                                    price={prod.price}
                                    caption={prod.name}
                                    image={prod.image_large}
                                    extraClass={'mr-3 ml-3 mb-4 mt-4'}
                                />
                            </Ingredient>
                        )
                    }))
                }
            </Category>
        </React.Fragment>)
    })

    return (
        <section>
            <div style={{display: 'flex'}} >
                {
                    classData && classData.map((v)=>
                        <Tab key={v.name}
                             value={v.name}
                             active={current === v.name}
                             onClick={OnClickTabCategory}>
                            {v.lang}
                        </Tab>
                    )
                }
            </div>

            <div className={styles.box + ' mt-10'}>
                { productsElements }
            </div>
        </section>
    );
};