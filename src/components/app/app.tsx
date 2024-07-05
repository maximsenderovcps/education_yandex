import React, {useEffect, useState} from 'react';
import {Pages} from "components/page";
import {IProduct, ProductsContext} from "entities/products";

import './app.module.css'

const API_URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)

        fetch(API_URL)
            .then((response)=>{
                if (!response.ok)
                    throw new Error(`HTTP error: ${response.status}`);
                return response.json()
            })
            .then((json)=>{
                if (json && json.success && json.data)
                    return json.data
                else
                    throw new Error(`Response error: success - ${json && json.success}`);
            })
            .then((json)=>setProducts(json))
            .catch((reason) => {
                console.error(reason)
                setError(true)
            })
            .finally(()=>setLoading(false))
    }, [])


    return (
        <ProductsContext.Provider value={products}>
            <Pages/>
        </ProductsContext.Provider>
    );
}

export default App;