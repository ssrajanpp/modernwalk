import React from "react";
//import { useSelector, useDispatch } from "react-redux";
import Header from "../header/Header";
import Card from "../card/Card";
//import useFetch from "../../hooks/useFetch";

const MensCloths = () => {
  return (
    <>
      <Header></Header>
      <main className="container-fluid mw-card-product-wrapper">
        <div className="row">
          <h2 className="mw-card-product-heading">Men's Cothing</h2>
        </div>
        <Card></Card>
      </main>
    </>
  );
};

export default MensCloths;
