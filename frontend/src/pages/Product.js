import React, {useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import {useParams} from 'react-router-dom';
import { BsPrefixComponent } from 'react-bootstrap/esm/helpers';
import Button from 'react-bootstrap/Button';

const Product = () => {
    const [product, setProduct] = useState(null)
    const params = useParams()

    useEffect(()=>{
        const getProductAsync = async () =>{
            const response = await ProductService.getProductById(params.id)
            console.log(params.id)
            setProduct(response.data)
        }   
        getProductAsync()
    }, [])

    const renderProduct = () => {
        if(product) {
            return (
                    <div className='wrapper'>
                         <div className='product_img'>
                            <img src={product.thumbnail}  style={{width: "500px", height: "500px"}}/>
                        </div>

                        {/* <img src={product.thumbnail}/> */}
                        <div>
                            <h2> {product.title}</h2>
                            <p>{product.description}</p>
                        </div>
                        <div className='product_price'>
                            <div>                      
                                <h4>Quantity : &nbsp;   
                                        <Button variant="danger">&emsp;-&emsp;</Button>{' '}
                                        &nbsp;{product.price} &nbsp;
                                        <Button variant="success">&emsp;+&emsp;</Button>{' '}
                                </h4>
                            </div>
                            <h5>(Price per piece:&emsp;&nbsp;{product.price} ,- EUR)</h5>
                            <h2>Total Price: <span className='price'> &nbsp;&nbsp;{product.price} ,- EUR</span></h2>
                        </div>
                        
                    </div>    

                
            )
        }
         
            }

    return(
        
            <div className='container'>
                <div>{renderProduct()}</div>
             </div>
        
        


        // <div>{renderProduct()}</div>
    )
}
export default Product