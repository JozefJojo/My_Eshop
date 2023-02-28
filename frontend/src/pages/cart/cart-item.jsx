import React from 'react'

export const CartItem = (props) => {
    const {id, thumbnail,title,price} = props.data;
    return(
        <div className='cartItem'>
             <img src={thumbnail}  style={{width: "150px", height: "150px"}}/>
             <div>{title.substring(0, 15)}</div>
             <div>{price} ,- EUR</div>
        </div>
    )
}