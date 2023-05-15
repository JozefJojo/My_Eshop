import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import { OrderItem } from './cart/order-item';  
import './cart/order.css';
import Button from 'react-bootstrap/Button';
import { createOrder } from '../services/OrderService';

const Order = () =>{

    const [products, setProducts] = useState([])
    const {cartItems,getTotalCartPrice} = useContext(ShopContext);
    const totalPrice = getTotalCartPrice();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber:"",
        city: "",
        postalCode: "",
        address: "",
    })

      const setInputField = event => {
        const { name, value } = event.target;
        setUser((prevState) => ({
          ...prevState,
          [name]: value
        }))
      }

      const makeOrder = async () =>{

        console.log("Making Order...")

        const orderlines = Object.entries(cartItems).map(([productId, amount]) => ({
        productId: parseInt(productId),
        amount: amount
        }));

        const order  = {
            created: new Date().toISOString().slice(0, 19).replace("T", " "),
            status: "CREATED",
            name: user.name,
            email: user.email,
            city: user.city,
            postalCode: user.postalCode,
            address: user.address,
            phoneNumber: user.phoneNumber,
            role: "user-admin",
            orderlines
        }

        const response = await createOrder(order)
      }

   
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
                        <form className='formContainer'>
                            <h2 className="user-form-label">Delivery data</h2>

                            <label className="user-form-label">Name</label>
                            <input type="text" name="name" value={user.name} className="user-input" onChange={setInputField}/>

                            <label className="user-form-label">E-mail</label>
                            <input type="text" name="email" value={user.email} className="user-input" onChange={setInputField}/>
                            
                            <label className="user-form-label">City</label>
                            <input type="text" name='city' value={user.city} className="user-input" onChange={setInputField}/>

                            <label className="user-form-label">Postal Code</label>
                            <input type="text" name='postalCode' value={user.postalCode}className="user-input" onChange={setInputField}/>
                            
                            <label className="user-form-label">Address</label>
                            <input type="text" name='address' value={user.address}className="user-input" onChange={setInputField}/>

                            <label className="user-form-label">Phone Number</label>
                            <input type="text" name='phoneNumber' value={user.phoneNumber}className="user-input" onChange={setInputField}/>

                        </form>
                    </div>
                    <div className='formContainer'>
                        <h2 className="user-form-label">Items in the cart</h2>

                        <div className='orderList'>
                            {products.map((product) => cartItems[product.id] ? <OrderItem key={product.id} data={product} /> : null)}
                        </div>
                        <div className='totalPrice'>{totalPrice} -,E </div>           
                    </div>
                    <div className='formContainer'>
                        <Button variant="success" className="buy-button" onClick={() => makeOrder()}>complete the purchase - BUY</Button>
                    </div>
               

                </div>
                    
        </div>
        )
}

export default Order