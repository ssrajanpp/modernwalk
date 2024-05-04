import React from "react";
import { useSelector } from "react-redux";


const Card = () => { 
  const products = useSelector((state) => state.filteredProducts);  
  
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
          <div className="mw-card-product-card d-flex justify-content-center">
            <h2 className="mw-card-product-title">{product.category}</h2>
            <img
              className="mw-card-product-image"
              src={product.image}
              alt={product.title}
            />
             {/* <div className="mw-card-product-bottom bgcolor-pink"> */}
             {/* {console.log(product.category)} */}
            <div className={product.category.replace(/'/g, '') === 'mens clothing' ? 'mw-card-product-bottom bgcolor-green' : 'mw-card-product-bottom bgcolor-pink'}>
              <h3 className="mw-card-product-price">{product.price}</h3>
              <p className="mw-card-product-desc">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
