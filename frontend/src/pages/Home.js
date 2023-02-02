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


    const displayText = (product) => {
        if (product) {
          if (product.description.length > 80) {
            return product.description.substring(0, 100)
          }
          return product.description
        }
      }

      const displayTitle = (product) => {
        if (product) {
          if (product.title.length > 15) {
            return product.title.substring(0, 15)
          }
          return product.title
        }
      }


    const renderProducts = () => {
        return products.map ((product) => {
            return( 
                <div className ="col-12 col-sm-6 col-lg-4 mb_80" key={product.id}  >
                    <div className='card'>
                        <div className='card_img'>
                            <img src={product.thumbnail}  style={{width: "150px", height: "150px"}}/>
                        </div>
                        <div className='card_body' >
                            <h2>{displayTitle(product)}</h2>
                            <p>{displayText(product)}</p>
                            <div className='price_section'>
                                <div className='price'>
                                    <h3>{product.price} ,- EUR</h3>
                                </div>
                            </div>
                        </div>
                        <div className='cta_group'>
                            <div className='button_act'>Add to Cart</div>
                        </div>
                    </div>
                </div>
            )          
        })
    }

    return (
            <div className="row">{renderProducts()}</div>
        )

}

export default Home