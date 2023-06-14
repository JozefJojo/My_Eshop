import React, {useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import "../../styles/order.css";

export const OrderItem = (props) => {
    const {id,title,price} = props.data;
    const {cartItems} = useContext(ShopContext);
    const cartItemAmout = cartItems[id];

    return(
        <div className='orderItem'>
            <div className='boxTitle'>{title}</div>
            <div className='box'>{cartItemAmout}</div>
            <div className='box'>{cartItemAmout * price} -,E </div>
        </div>
    )
}

