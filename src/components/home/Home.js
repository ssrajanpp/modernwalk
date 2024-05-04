import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Cart from "../cart/Cart";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  // Hooks to fetch the api data
  const {
    data: products,
    error,
    isLoading,
  } = useFetch("https://fakestoreapi.com/products");

  // Set the products in the redux store
  // when the data is fetched

  useEffect((category) => {
    dispatch({ type: "SET_LOADING", isLoading: true });
    const category1 = "men's clothing";
    if (products.filter(
      (product) => product.category === category1
    )) {
      dispatch({ type: "SET_PRODUCTS", products });
      window.scrollTo(0,0);
    } else if (error) {
      dispatch({ type: "SET_ERROR", error });
    }
  }, [isLoading, products, error, dispatch]);

  const filterProducts = (category) => {    
    const filteredProducts = allProducts.filter(
      (product) => product.category === category
    );    
    dispatch({ type: "FILTER_PRODUCTS", filteredProducts });
      window.scrollTo(0,0);
  };

  return (
    <>
      <Header></Header>
      <main className="container-fluid mw-card-product-wrapper">
        <div className="row">
          <h2 className="mw-card-product-heading">Flash Sales</h2>
        </div>
        <Cart></Cart>
        <div className="row">
          <h2 className="mw-card-product-heading">Categories</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Link
              to={"/mens-cloths/MensCloths"}
              className="mw-product-category-link"
            >
              <div
                className="mw-product-category bgcolor-pink"
                onClick={() => filterProducts("men's clothing")}
              >
                <h3 className="mw-category-title">Men's Clothing</h3>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <Link
              to={"/womens-cloths/WomensCloths"}
              className="mw-product-category-link"
            >
              <div
                className="mw-product-category bgcolor-green"
                onClick={() => filterProducts("women's clothing")}
              >
                <h3 className="mw-category-title">Women's Clothing</h3>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
