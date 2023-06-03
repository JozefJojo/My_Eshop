import React, {useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import ProductService from '../services/ProductService';
import { ShopContext } from '../context/shop-context';
import "./home.css";

const Home = () =>{

    const { addToCart, cartItems } = useContext(ShopContext);
    const [products, setProducts] = useState([])
    const navigate = useNavigate();

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
            const cartItemAmout = cartItems[product.id];
            return( 
                <div className ="col-12 col-sm-6 col-lg-4 mb_80" key={product.id}  >
                    <div className='card' >
                        <div  onClick={() => navigate(`/products/${product.id}`)}>
                            <div className='card_img'>
                                <img src={product.thumbnail}  style={{width: "150px", height: "150px"}} alt={product.name}/>
                            </div>
                            <div className='card_body' >
                                <h2>{displayTitle(product)}</h2>
                                <p>{displayText(product)}</p>
                                <div className='price_section'>
                                    <h3>{product.price} ,- EUR</h3>
                                </div>
                            </div>
                        </div>
                       
                        <div className='cta_group'>
                            <button className='button_act'  onClick={() => addToCart(product.id)}>
                                Add to Cart {cartItemAmout > 0 && <>({cartItemAmout})</>}
                            </button>
                        </div>
                    </div>
                </div>
            
            )          
        })
    }

    return (
        <div className='product_list_container'>
            <div className='container'>
                <div className="row">{renderProducts()}</div>
            </div>
        </div>
        )
}

export default Home