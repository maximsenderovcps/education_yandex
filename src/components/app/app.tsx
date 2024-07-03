import React, {useEffect, useState} from 'react';
import {Pages} from "components/page";
import {ProductsContext} from "components/entities/products";

import './app.module.css'


function App() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)

        fetch('/utils/data.js')
            .then((response)=>response.json())
            .then((json)=>json || [])
            .then((json)=>setData(json))
            .catch((reason) => setError(true))
            .finally(()=>setLoading(false))
    }, [data])


    return (
        <ProductsContext.Provider value={data}>
            <Pages/>
        </ProductsContext.Provider>
    );
}

export default App;