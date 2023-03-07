import React, {useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom'


export const CartItem = (props) => {
    const {id, thumbnail,title,price} = props.data;
    const {cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    const cartItemAmout = cartItems[id];
    const navigate = useNavigate();

    return(
        <div className='cartItem'>
            <div className='cartPictureAndTittle'>
                <img src={thumbnail} alt="image of product" onClick={() => navigate(`/products/${id}`)} />
                <p style={{ fontSize: '18px', fontWeight: 'bold' }} >
                    <b>{title.substring(0, 15)}</b>
                </p>
            </div>
             <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }} >
                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                    <Button variant="secondary" onClick={() => removeFromCart(id)}>-</Button>
                    <div>
                    <span className="fs-3">{cartItemAmout}</span> in cart
                    </div>
                    <Button variant="secondary"  onClick={() => addToCart(id)}>+</Button>
                    <p style={{ paddingLeft: '20px', paddingRight: '20px',marginBottom:'0' }}>{price} ,- EUR</p>
                </div>
             </div>
             <p style={{ paddingLeft: '100px', paddingRight: '80px',marginBottom:'0', fontSize: '25px', fontWeight: 'bold' }}>{cartItemAmout* price} ,- EUR</p>
        
        </div>
    )
}

