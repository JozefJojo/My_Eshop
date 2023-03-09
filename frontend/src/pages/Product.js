import React, {useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import {useParams} from 'react-router-dom';

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
                        <div>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <h2>Price: <span className='price'> &nbsp;&nbsp;{product.price} ,- EUR</span></h2>
                        </div>
                    </div>   
            )
        }
         
    }

    return(     
        <div className='container'>
            <div>{renderProduct()}</div>
        </div>
    )
}
export default Product