

import React from 'react';
import { useState, useEffect } from 'react';

const Cart = () => {
    const [products, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
     // fetch('https://jsonplaceholder.typicode.com/products')
      fetch('https://fakestoreapi.com/products')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setIsLoaded(true);
          setData(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        });
    }, []);


    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
    return(
        <div className="row"> 
                {products.map((product) => (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                        <div className='mw-card-product-card d-flex justify-content-center'>
                            <h2 className='mw-card-product-title'>Men's Clothing</h2>
                            <img className='mw-card-product-image' src={product.image} alt={product.title} />
                            <div className='mw-card-product-bottom bgcolor-pink'>
                                <h3 className='mw-card-product-price'>{product.price}</h3>
                                <p className='mw-card-product-desc'>{product.description}</p>
                            </div>
                            {/* <p>{product.category}</p> */}
                        </div>
                    </div>
                ))}
             
             </div> 
)}}


export default Cart;