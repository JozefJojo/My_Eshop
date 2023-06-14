import React, {useContext, useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import { OrderItem } from './cart/order-item';  
import { createOrder } from '../services/OrderService';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import '../styles/order.css';
import '../styles/formValidation.css'


const Order = () =>{

    const [products, setProducts] = useState([])
    const {cartItems,getTotalCartPrice} = useContext(ShopContext);
    const totalPrice = getTotalCartPrice();
    const navigate = useNavigate();
    const { resetContext } = React.useContext(ShopContext);

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber:"",
        city: "",
        postalCode: "",
        address: "",
        });
        

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Name",
            errorMessage:
            "Name should be 3-16 characters and shouldn't include any special character! ",
            example:"Example: Jan Novak",
            label: "Name",
            pattern: "^[A-Za-z]{3,16} [A-Za-z]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            example:"Example: jan.novak@gmail.com",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "phoneNumber",
            type: "text",
            placeholder: "Phonenumber",
            errorMessage:"Phone-Number should be 10 digit whitout whitespace and should start with 09!",
            example:"Example: 0912 345 678",
            label: "Phone-Number",
            pattern: `^[0][9][0-9]{2} [0-9]{3} [0-9]{3}$`,
            required: true,
            },


        {
            id: 4,
            name: "city",
            type: "text",
            placeholder: "City",
            errorMessage:"City should be 3-16 characters!",
            example:"Example: Bratislava",
            label: "City",
            pattern: "^[A-Za-z ]{2,16}$",
            required: true,
        },
        {
            id: 5,
            name: "postalCode",
            type: "text",
            placeholder: "postalCode",
            errorMessage: "PostalCode should be 5 digit !",
            example:"Example: 900 31",
            label: "Postal-Code",
            pattern: `^[0-9]{3} [0-9]{2}$`,
            required: true,
        },
        {
            id: 6,
            name: "address",
            type: "text",
            placeholder: "Adress",
            errorMessage: "Passwords don't match!",
            example:"Example: Lieskova 35A",
            label: "Adress",
            pattern: "^[A-Za-z 0-9]{3,16}$",
            required: true,
        },
        ];
        
    const [formSubmited, setFormSubmited] = useState(false);
          
    useEffect(() => {
    if (formSubmited) {
        makeOrder();
    }
    }, [formSubmited]); 

    const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true)
    };
        
    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };


    const makeOrder = async () =>{

    console.log("Making Order...")

    const orderlines = Object.entries(cartItems).map(([productId, amount]) => ({
    productId: parseInt(productId),
    amount: amount
    }));

    const order  = {
        name: userInfo.name,
        email: userInfo.email,
        city: userInfo.city,
        postalCode: userInfo.postalCode,
        address: userInfo.address,
        phoneNumber: userInfo.phoneNumber,
        orderlines
    }

    const response = await createOrder(order)
    
    if (response.success) {
        resetContext(); 
        navigate('/Thanks');
        } else {
        console.log("Error - Order was not created");
        }
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
                    <form onSubmit={handleSubmit} >
                        {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={userInfo[input.name]}
                            onChange={onChange}
                        />
                        ))}
                        
                        <div className='formContainer'>
                            <h2 className="user-form-label">Items in the cart</h2>
                            <div className='orderList'>
                                {products.map((product) => cartItems[product.id] ? <OrderItem key={product.id} data={product} /> : null)}
                            </div>
                            <div className='totalPrice'>
                                {totalPrice} -,E 
                            </div>           
                        </div>

                        <div className='formContainer'>
                            <button class="btn btn-primary size-btn" >BUY</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order