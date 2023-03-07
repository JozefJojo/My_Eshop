import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import {CartItem}  from './cart/cart-item';
import "./cart/cart.css";

const Cart = () =>{

    const [products, setProducts] = useState([])
    const {cartItems, getTotalCartPrice, getTotalCartAmount} = useContext(ShopContext);
    const totalPrice = getTotalCartPrice();
    const totalAmount = getTotalCartAmount();

    useEffect (() => {
        const getProductsAsync = async () => {
            const response = await ProductService.getProducts()
            setProducts (response.data)
        }
        getProductsAsync()
    },[])

    console.log (products)
   
    return (
        <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div>
                <p>Total Price : {totalPrice} -,EUR </p>
            </div>
            <div>
                <p>Total Amount : {totalAmount} Kus </p>
            </div>
            <div className='cartItems'>
                {products.map((product) => {
                    if(cartItems[product.id]){
                        return <CartItem data = {product} />;
                    }
                })}
            </div>
        </div>
        )
}

export default Cart