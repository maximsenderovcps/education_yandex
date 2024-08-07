import React, {useCallback, useMemo} from "react";

import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {useAppDispatch, useAppSelector} from "components/services/providers/store";

import {clName} from "components/shared/utils";
import {useDropItem} from "components/shared/hooks";

import {IProduct, useGetProductsQuery} from "entities/products";
import {basketActions, selectSelectedProductsState} from "entities/basket";

import {CardPosition} from "./position/position";
import {Order} from "./order/order";

import styles from './constructor-burger.module.css'


export const BurgerConstructor = () => {
    const dispatch = useAppDispatch()
    const {data: products = []} = useGetProductsQuery()
    const {bun: selectedBun, ingredients: selectedIngredients} = useAppSelector(selectSelectedProductsState)

    const handleDropItem = useCallback((id: string)=>{
        const found = products.find((p)=>p._id === id)

        if (found && found.type === 'bun')
            dispatch(basketActions.addBun(id))
        else
            dispatch(basketActions.add(id))
    }, [dispatch, products])

    const [dropRef, canDrop] = useDropItem(['bun', 'sauce', 'main'], handleDropItem)

    const selectedBunDoc = useMemo(()=>{
        if (products && selectedBun)
            return products.find((p)=>p._id === selectedBun)
        return null
    }, [products, selectedBun])

    const selectedIngredientsDocs = useMemo(()=>{
        if (products.length && selectedIngredients.length)
            return selectedIngredients.reduce((previousValue: IProduct[], currentValue, index: number):IProduct[] => {
                const found = {
                    ...products.find((p)=>p._id === currentValue.id)!,
                    uuid: currentValue.uuid
                }

                previousValue = previousValue.concat([found])
                return previousValue
            }
            ,[] as IProduct[])
        return []
    }, [products, selectedIngredients])

    const totalPrice = useMemo(()=>{
        let total = 0
        if (!products.length)
            return total

        if ( selectedBunDoc)
            total = selectedBunDoc.price * 2

        if (selectedIngredientsDocs.length)
            total = selectedIngredientsDocs.reduce((previousValue: number, currentProd: IProduct): number=>{
                previousValue +=  currentProd.price
                return previousValue
            }, total)

        return total
    }, [products, selectedIngredientsDocs, selectedBunDoc])

   return (
       <section>
           <div className={styles.content + ' pl-4 mb-10'} ref={dropRef as React.RefObject<HTMLDivElement>}>
               {canDrop && <div className={styles.drop_place}>
                   <p className={clName('text text_type_main-medium', [], {'text_color_inactive': !canDrop})}>
                       Перетащите сюда ингредиент
                   </p>
               </div>}
               {!selectedBunDoc &&
                   <p className={'text text_type_main-medium'}
                      style={{margin:'auto'}}>
                       Выберите булку
                   </p>
               }
               <div className="pr-4">
                   {selectedBunDoc && <CardPosition
                       id={selectedBunDoc._id}
                       index={-1}
                       uuid={''}
                       typeProduct={selectedBunDoc.type}
                       text={`${selectedBunDoc.name} (верх)`}
                       price={selectedBunDoc.price}
                       thumbnail={selectedBunDoc.image}
                       type="top"
                       isLocked={true}
                   />}
               </div>
               <div className={styles.box + ' pr-2'}>
                   {!selectedIngredientsDocs.length &&
                       <p className={'text text_type_main-medium'}
                          style={{margin:'auto'}}>
                           Перетащите сюда ингредиент
                       </p>
                   }
                   {selectedIngredientsDocs.map((v, index)=>
                       <CardPosition
                           id={v._id}
                           index={index}
                           uuid={v.uuid!}
                           typeProduct={v.type}
                           key={v.uuid}
                           text={v.name}
                           price={v.price}
                           thumbnail={v.image}
                       />
                   )}
               </div>
               <div className="pr-4">
                  {selectedBunDoc && <CardPosition
                       id={selectedBunDoc._id}
                       index={-1}
                       uuid={''}
                       typeProduct={selectedBunDoc.type}
                       text={`${selectedBunDoc.name} (низ)`}
                       price={selectedBunDoc.price}
                       thumbnail={selectedBunDoc.image}
                       type="bottom"
                       isLocked={true}
                   />}
               </div>
           </div>
           <div className={styles.button_order}>
               <span className="mr-10">
                   <p className="text text_type_digits-medium">{totalPrice}&nbsp;
                   <CurrencyIcon type="primary" /></p>
               </span>
               <Order>
                   <Button htmlType={'button'}>Оформить заказ</Button>
               </Order>
           </div>
       </section>
   );
}