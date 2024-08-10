import React, {useCallback, useEffect, useMemo} from "react";

import {useLocation, useNavigate, useParams} from "react-router-dom";

import {Modal} from "components/shared/ui";
import {RoutesPath} from "components/shared/configs";

import {useAppDispatch, useAppSelector} from "components/services/providers/store";

import {
    ingredientDetailsActions,
    selectCurrentIngredientDetailsState
} from "entities/products/ingredient";

import {useGetProductsQuery} from "entities/products";

import {IngredientDetails} from "components/sections/ingredients-burger";

import styles from './ingredient-details-page.module.css'

export const IngredientDetailsPage = () => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const location = useLocation();
    const id_param = useParams().id
    const background = location.state && location.state.background;

    const {isOpen: isOpenModal, details: currentDetails} = useAppSelector(selectCurrentIngredientDetailsState)

    const {
        data: products = [],
        // isLoading,
        // isSuccess,
        // isError,
        // error
    } = useGetProductsQuery()

    const details = useMemo(()=>{
        if (!isOpenModal)
            if (products.length)
                return products.find((v)=>v._id === id_param)!
        return currentDetails
    },[currentDetails, products, isOpenModal])


    useEffect(()=>{
        if (!background)
            dispatch(ingredientDetailsActions.clean())
    },[dispatch, background])

    const handleClose = useCallback(()=>{
            dispatch(ingredientDetailsActions.clean())
            navigate(RoutesPath.home)
    }, [dispatch, navigate])

    return(
        <>
            {!details && <div>Не найден такой ингредиент</div>}
            {isOpenModal && background && details?._id &&
                <Modal onClose={handleClose} extraClassContent="pb-5">
                    <IngredientDetails details={details}/>
                </Modal>
            }
            {!isOpenModal && details?._id &&
                <section className={styles.page}>
                    <IngredientDetails details={details}/>
                </section>
            }
        </>
    )
}