import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import {CartItem}  from './cart/cart-item';
// import "./cart/cart.css";
// import Button from 'react-bootstrap/Button';

const Order = () =>{

    const [products, setProducts] = useState([])
    const {cartItems, getTotalCartPrice, getTotalCartAmount} = useContext(ShopContext);
   
    useEffect (() => {
        const getProductsAsync = async () => {
            const response = await ProductService.getProducts()
            setProducts (response.data)
        }
        getProductsAsync()
    },[])


    return (
        <div>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cartItems'>
                {products.map((product) => {
                    if(cartItems[product.id]){
                        // return <CartItem key={product.id} data={product} />;
                        return <div>{product.id}</div>
                    }
                })}
            </div>
        </div>
        )
}

export default Order