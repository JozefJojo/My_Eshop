import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import {CartItem}  from './cart/cart-item';
import "./cart/cart.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const Cart = () =>{

    const [products, setProducts] = useState([])
    const {cartItems, getTotalCartPrice, getTotalCartAmount} = useContext(ShopContext);
    const totalPrice = getTotalCartPrice();
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

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
            <div className='cartOrder'>
                <p>You have &nbsp;
                    <span className="important-text">{totalAmount} </span> 
                    items in your cart with a total price  :&nbsp;
                    <span className="important-text"> {totalPrice}</span>
                    &nbsp;-,EUR 
                </p>
                <Button variant="success" className="continue-button" onClick={() => navigate(`/order`)}>Continue</Button>

            </div>
            <div>
                {products.map((product) => {
                    if(cartItems[product.id]){
                        return <CartItem key={product.id} data={product} />;
                    }
                })}
            </div>
        </div>
        )
}

export default Cart