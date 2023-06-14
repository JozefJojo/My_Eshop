import React, { createContext , useEffect, useState } from "react";
import ProductService from '../services/ProductService';


export const ShopContext = createContext (null);

export const ShopContextProvider = (props) => {

    const [products, setProducts] = useState([])
  
    const resetContext = () => {
      setCartItems({});
    };

    
    useEffect (() => {
        const getProductsAsync = async () => {
            const response = await ProductService.getProducts()
            setProducts (response.data)
        }
        getProductsAsync()
    },[])

  
    const [cartItems, setCartItems]=useState([]);

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const currentValue = prev[itemId];
            if (typeof currentValue !== 'undefined' && !isNaN(currentValue)) {
              return { ...prev, [itemId]: currentValue + 1 };
            } else {
              return { ...prev, [itemId]: 1 };
            }
          });
      };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
          const currentValue = prev[itemId];
          if (typeof currentValue !== 'undefined' && !isNaN(currentValue)) {
            return { ...prev, [itemId]: currentValue - 1 };
          } else {
            return { ...prev, [itemId]: 1 };
          }
        });
      };

    console.log(cartItems);

    const getTotalCartPrice = () => {
      let totalPrice= 0;
      for (const item in cartItems) {
        let itemInfo = products.find((product)=>product.id === Number(item));
        totalPrice +=cartItems[item] * itemInfo.price;
      }
      return totalPrice;
    };

    const getTotalCartAmount = () => {
      let totalAmount= 0;
      for (const item in cartItems) {
        totalAmount +=cartItems[item];
      }
      return totalAmount;
    };


    const contextValue = { cartItems , addToCart , removeFromCart, getTotalCartPrice, getTotalCartAmount, resetContext };

    return (
    <ShopContext.Provider value = {contextValue}>
        {props.children}
    </ShopContext.Provider>
    );
};