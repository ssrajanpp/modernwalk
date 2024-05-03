

import React from 'react';
import Header from '../header/Header';
import Cart from '../cart/Cart';

const Home = () => {

    return(
        <>
            <Header></Header>
            <main className='container-fluid mw-card-product-wrapper'>
                <div className="row">
                    <h2 className='mw-card-product-heading'>Mens's Cothing</h2>
                </div>
                <Cart></Cart>
            </main>
        </>
    )
}


export default Home;