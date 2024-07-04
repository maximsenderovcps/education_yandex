import React, {useContext, useRef, useState} from "react"

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

import {Category} from "./category/category";
import {Card} from "./card/card";

import {ProductsContext} from "components/entities/products";

import styles from './ingredients-burger.module.css'


export const IngredientsBurger = () => {
    const [current, setCurrent] = useState('bun')
    const categoriesRefs = useRef({} as any);

    const data = useContext(ProductsContext)
    const categoriesData = [
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
        categoriesRefs.current[tabName].scrollIntoView({ block: "start",  behavior: "smooth" });
    }

    const productsElements = categoriesData && categoriesData.map((category, index)=>{
        const productsOfCat = data && data.filter((v)=>v.type===category.name)

        return (<React.Fragment key={category.name}>
            <div ref={el => categoriesRefs.current[category.name] = el }> </div>
            <Category  title={category.lang} extraClass={'mb-10'}>
                {
                    productsOfCat.map((prod => {
                        return (
                            <Card
                                key={prod._id}
                                count={1}
                                price={prod.price}
                                caption={prod.name}
                                image={prod.image_large}
                                extraClass={'mr-3 ml-3 mb-4 mt-4'}
                            />
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
                    categoriesData && categoriesData.map((v)=>
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