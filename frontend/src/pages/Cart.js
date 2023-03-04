import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import {CartItem}  from './cart/cart-item';
import "./cart/cart.css";

const Cart = () =>{

    const [products, setProducts] = useState([])
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    useEffect (() => {
        const getProductsAsync = async () => {
            const response = await ProductService.getProducts()
            setProducts (response.data)
        }
        getProductsAsync()
    },[])

    console.log (products)
    // console.log (amount)


    return (
        <div className='cart'>
           <div>
                <h1>Your Cart Items</h1>
           </div>
           <div className='cartItems'>
                {products.map((product) => {
                    if(cartItems[product.id]){
                        return <CartItem data = {product} />;
                    }
                })}
           </div>
           <div>
                <p>Total Amount : {totalAmount} -,EUR </p>
           </div>
        </div>
        )
}

export default Cart