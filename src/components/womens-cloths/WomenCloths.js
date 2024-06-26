import React from "react";
import Header from "../header/Header";
import Card from "../card/Card";

const WomenCloths = () => {
  return (
    <>
      <Header></Header>
      <main className="container-fluid mw-card-product-wrapper">
        <div className="row">
          <h2 className="mw-card-product-heading">Women's Cothing</h2>
        </div>
        <Card></Card>
      </main>
    </>
  );
};

export default WomenCloths;
