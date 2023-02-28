import React from 'react'

export const CartItem = (props) => {
    const {id, thumbnail,title,price} = props.data;
    return(
        <div className='cartItem'>
            <div>
                <img src={thumbnail}  />
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    <b>{title.substring(0, 15)}</b>
                </p>
            </div>
             <p> Amount {id} </p>
             <p>{price} ,- EUR</p>
        </div>
    )
}