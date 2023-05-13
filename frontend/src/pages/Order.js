import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import { OrderItem } from './cart/order-item';  
import './cart/order.css';
import Button from 'react-bootstrap/Button';
import { createOrder } from '../services/OrderService'
// import { createUser } from '../services/UserService';
import { createOrderLine } from '../services/OrderlineService';

const Order = () =>{

    const [products, setProducts] = useState([])
    const {cartItems,getTotalCartPrice} = useContext(ShopContext);
    const totalPrice = getTotalCartPrice();

    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        phoneNumber:"",
        city: "",
        postalCode: "",
        address: "",
        role: "user"
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
          // await saveOrderlines()

          const order  = {
            orderId:"",
            created: new Date().toISOString().slice(0, 19).replace("T", " "),
            status: "created",
            user
        }
          const response = await createOrder(order)
          // console.log(response.data)
      }


    // const saveOrderlines = async () => {
    //   console.log(cartItems)
 
    //   Object.entries(cartItems).forEach((item) => {
    //     const orderline  = {
    //       id: "",
    //       productId: item[0],
    //       amount:item[1]
    //     }    
    //     const response = createOrderLine(orderline);
    //     console.log(response.data)

    //   });
      
    // };

   
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
                        {/* save Orderline ------toto musis dokoncit -- pridat do Backendu orderline postovanie*/}
                        {/* <Button variant="success" className="buy-button" onClick={() => saveOrderlines()}>save Orderlines</Button> */}
                   
                    </div>
                    <div className='formContainer'>
                        {/* <Button variant="success" className="continue-button" onClick={() => navigate(`/order`)}>Continue</Button> */}
                        <Button variant="success" className="buy-button" onClick={() => makeOrder()}>complete the purchase - BUY</Button>
                    </div>
               

                </div>
                    
        </div>
        )
}

export default Order