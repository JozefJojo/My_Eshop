import React, {useEffect, useState } from 'react';
import ProductService from '../services/ProductService';

const Home = () =>{

    const [products, setProducts] = useState([])

    useEffect (() => {
        const getProductsAsync = async () => {
            const response = await ProductService.getProducts()
            setProducts (response.data)
        }
        getProductsAsync()
    },[])


    const renderProducts = () => {
        return products.map ((product , index) => {
            return( 
                <div key={index}>
                <div>
                    <h3>{product.title}</h3>
                    <h5>{product.price}</h5>
                </div>
            </div>
            )
                
        })
    }
 


    return (
        <div>{renderProducts()}</div>
    )

}

export default Home