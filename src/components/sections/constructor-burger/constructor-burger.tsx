import React, {useContext, useMemo} from "react";

import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {CardPosition} from "./position/position";
import {Order} from "./order/order";

import {ProductsContext} from "entities/products";

import styles from './constructor-burger.module.css'


export const BurgerConstructor = () => {
    const price = 610
    const products = useContext(ProductsContext)


    const selectedUser: string[] = useMemo(()=>
             products && products
             .slice(1, products.length > 10? 9: products.length)
             .reduce<string[]>((prev: string[], current) =>{
                 prev.push(current._id)
                 return prev
         }, [])
     , [products])

    const selectedProducts = products && products.filter((v)=>
        v._id === selectedUser.find((id)=>id===v._id && v.type !== 'bun')
    )

   return (
       <section>
           <div className={styles.content + ' pl-4 mb-10'} >
               <div className="pr-4">
                   <CardPosition
                       type="top"
                       isLocked={true}
                       text="Краторная булка N-200i (верх)"
                       price={200}
                   />
               </div>
               <div className={styles.box + ' pr-2'}>
                   {selectedProducts && selectedProducts.map((v)=>
                       <CardPosition
                           key={v._id}
                           text={v.name}
                           price={v.price}
                           thumbnail={v.image}
                       />
                   )}
               </div>
               <div className="pr-4">
                   <CardPosition
                       type="bottom"
                       isLocked={false}
                       text="Краторная булка N-200i (низ)"
                       price={200}
                   />
               </div>
           </div>
           <div className={styles.button_order}>
               <span className="mr-10">
                   <p className="text text_type_digits-medium">{price}&nbsp;
                   <CurrencyIcon type="primary" /></p>
               </span>
               <Order>
                   <Button htmlType={'button'}>Оформить заказ</Button>
               </Order>           </div>
       </section>
   );
}