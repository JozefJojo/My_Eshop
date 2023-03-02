import React from 'react';
import Button from 'react-bootstrap/Button';

export const CartItem = (props) => {
    const {id, thumbnail,title,price} = props.data;
    const  quantity = 1;


    return(
        <div className='cartItem'>
            <div className='cartPictureAndTittle'>
                <img src={thumbnail} alt="image of product" />
                <p style={{ fontSize: '18px', fontWeight: 'bold' }} >
                    <b>{title.substring(0, 15)}</b>
                </p>
            </div>
             <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }} >
                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                    <Button variant="secondary">-</Button>
                    <div>
                    <span className="fs-3">{quantity}</span> in cart
                    </div>
                    <Button variant="secondary" >+</Button>
                    <p style={{ paddingLeft: '20px', paddingRight: '20px',marginBottom:'0' }}>{price} ,- EUR</p>
                </div>
             </div>
             <p style={{ paddingLeft: '60px', paddingRight: '60px',marginBottom:'0', fontSize: '25px', fontWeight: 'bold' }}>{price} ,- EUR</p>
             <Button variant="danger" size="sm">Remove</Button>
        </div>
    )
}

