import React, { createContext , useEffect, useState } from "react";
import ProductService from '../services/ProductService';


export const ShopContext = createContext (null);


export const ShopContextProvider = (props) => {

    const [products, setProducts] = useState([])
    // const amountOfProducts = products.length || 10;
    const amountOfProducts = products.length ;

    useEffect (() => {
        const getProductsAsync = async () => {
            const response = await ProductService.getProducts()
            setProducts (response.data)
        }
        getProductsAsync()
    },[])

    console.log (products)
    console.log (amountOfProducts)

    const getDefaultCart = () => {
        let cart = {}
        for (let i=1; i < amountOfProducts + 1;i++){ 
            cart[i] = 0
        }
        return cart;
    }

    console.log (getDefaultCart())
   
    const [cartItems, setCartItems]=useState(getDefaultCart());

    const addToCart = (itemId) => {
        // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setCartItems((prev) => {
            const currentValue = prev[itemId];
            console.log(itemId) ;
            console.log (currentValue);
            if (typeof currentValue !== 'undefined' && !isNaN(currentValue)) {
              return { ...prev, [itemId]: currentValue + 1 };
            } else {
              console.log("predosly stav je nedefinovany")
            return { ...prev, [itemId]: 1 };
            }
          });
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