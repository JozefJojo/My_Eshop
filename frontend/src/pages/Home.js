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
        return products.map((product, index) => {
          return (
            <div key={index} className="product">
                <div>
                    <h3 className="product-attribute" style={{color: "blue"}}>{product.title}</h3>
                    {/* <div className="product-attribute">{displayText(product)}</div> */}
                    {/* <div className="product-attribute">{product.producerName}</div>  */}
                    <div className="product-attribute" style={{marginTop: "1rem", fontWeight: "bold"}}>{product.price} kč</div>
                </div>
                {/* <div>
                    <button onClick={() => navigate(`/product/${product.id}`)}>BUY</button>
                </div> */}
            </div>
          )
        })
      }

   


    // const renderProducts = () => {
    //     return products.map ((product , index) => {
    //         return( 
    //             <div key={index}>
    //             <div>
    //                 <h3>{product.title}</h3>
    //                 <h5>{product.price}</h5>
    //             </div>
    //         </div>
    //         )
                
    //     })
    // }
 


    return (
        // <div>{renderProducts()}</div>
        <div className="products">
            {renderProducts()}
        </div>
    )

}

export default Home