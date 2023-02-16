import React, {useEffect, useState } from 'react';
import ProductService from '../services/ProductService';


const Cart = () =>{

    const [products, setProducts] = useState([])
    const amount = products.length;

    useEffect (() => {
        const getProductsAsync = async () => {
            const response = await ProductService.getProducts()
            setProducts (response.data)
        }
        getProductsAsync()
    },[])

    console.log (products)
    console.log (amount)


    return (
        <div >
            {amount}
        </div>
        )
}

export default Cart