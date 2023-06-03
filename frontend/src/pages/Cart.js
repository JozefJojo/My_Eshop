import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import {CartItem}  from './cart/cart-item';
import "./cart/cart.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { OrderItem } from './cart/order-item'; 

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
                <div className='orderLineContainer'>
                        <h2 className="user-form-label">{<span>{totalAmount} </span> }Items in the cart</h2>

                        <div className='orderList'>
                            {products.map((product) => cartItems[product.id] ? <OrderItem key={product.id} data={product} /> : null)}
                        </div>
                        <div className='totalPrice'>{totalPrice} -,E </div>  
                        {/* save Orderline */}
                </div>

                <Button variant="success" className="continue-button" onClick={() => navigate(`/order`)}>Continue</Button>

            </div>

            <div>
                {products.map((product) => {
                    if (cartItems[product.id]) {
                        return <CartItem key={product.id} data={product} />;
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
        )
}

export default Cart