import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import { OrderItem } from './cart/order-item';  
import './cart/order.css';

// import "./cart/cart.css";
// import Button from 'react-bootstrap/Button';

const Order = () =>{

    const [products, setProducts] = useState([])
    const {cartItems} = useContext(ShopContext);
   
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
                <div>
                    <div>
                        <div className='orderList'> 
                            {products.map((product) => {
                                if(cartItems[product.id]){
                                    return <OrderItem key={product.id} data={product} />;
                                }
                            })}
                        </div>
                    </div>
                    
                </div>
                    
        </div>
        )
}

export default Order