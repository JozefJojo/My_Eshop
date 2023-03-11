import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import { OrderItem } from './cart/order-item';  
import './cart/order.css';

const Order = () =>{

    const [products, setProducts] = useState([])
    const {cartItems,getTotalCartPrice} = useContext(ShopContext);
    const totalPrice = getTotalCartPrice();

    const [user, setUser] = useState({
        // id: "",
        name: "",
        email: "",
        city: "",
        address: "",
      })

      const setInputField = event => {
        const { name, value } = event.target;
        setUser((prevState) => ({
          ...prevState,
          [name]: value
        }))
      }


    //   const submit = async event => {
    //     event.preventDefault();
    //     const response = await editUser(user)
    //     console.log(response.data)
    //     setMessage("Dodací údaje byly aktualizovány.")
    //     setTimeout(() => {
    //       setMessage("")
    //     }, 1000)
    //   }
   
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
                <h1>Purchase</h1>
            </div>
                <div>
                    
                    <div>
                        {/* <form className='formContainer' onSubmit={submit}> */}
                        <form className='formContainer'>
                            <h2 className="user-form-label">Delivery data</h2>

                            <label className="user-form-label">Name</label>
                            <input type="text" name="name" value={user.name} className="user-input" onChange={setInputField}/>

                            <label className="user-form-label">E-mail</label>
                            <input type="text" name="email" value={user.email} className="user-input" onChange={setInputField}/>
                            
                            <label className="user-form-label">City</label>
                            <input type="text" name='city' value={user.city} className="user-input" onChange={setInputField}/>

                            <label className="user-form-label">Address</label>
                            <input type="text" name='address' value={user.address}className="user-input"onChange={setInputField}/>

                            {/* <input type="submit" value="Uložit" className="user-input-button"/> */}
                        </form>
                    </div>
                    <div className='formContainer'>
                        <h2 className="user-form-label">Items in the cart</h2>

                        <div className='orderList'> 
                            {products.map((product) => {
                                if(cartItems[product.id]){
                                    return <OrderItem key={product.id} data={product} />;
                                }
                            })}
                        </div>
                        <div className='totalPrice'>{totalPrice} -,E </div>  
                    </div>
         
                </div>
                    
        </div>
        )
}

export default Order