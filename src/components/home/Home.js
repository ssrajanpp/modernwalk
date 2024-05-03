

import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../header/Header';
import Cart from '../cart/Cart';

const Home = () => {

    return(
        <>
        <Header></Header>
      <main className='container-fluid mw-card-product-wrapper'>
            <div className="row">
                <h2 className='mw-card-product-heading'>Flash Sales</h2>
            </div>
            <Cart></Cart>
            <div className="row">
                <h2 className='mw-card-product-heading'>Gategories</h2>
            </div>
            <div className="row">
            <div className="col-md-6 col-sm-12">
            <Link to={"/mens-cloths/MensCloths"} className='mw-product-category-link'> 
            <div className='mw-product-category bgcolor-pink'>
                    <h3 className='mw-category-title'>
                        Men's Clothing
                    </h3>
                </div>
                </Link>
            </div>
            <div className="col-md-6 col-sm-12">
            <Link to={"/womens-cloths/WomensCloths"} className='mw-product-category-link'>
                <div className='mw-product-category bgcolor-green'>
                    <h3 className='mw-category-title'>
                        Women's Clothing
                    </h3>
                </div>
                </Link>
            </div>
            </div>
            </main>
            </>
)}


export default Home;