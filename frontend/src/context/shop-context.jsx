import React, { createContext , useEffect, useState } from "react";

import ProductService from '../services/ProductService';



export const ShopContext = createContext (null);

const getDefaultCart = () => {
    let cart = {}
    for (let i=1; i < ProductService.length + 1;i++){ 
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (props) => {

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


    const [cartItems, setCartItems]=useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };

      console.log(cartItems);

    const contextValue = { cartItems , addToCart , removeFromCart };
    
    
    return (
    <ShopContext.Provider value = {contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};