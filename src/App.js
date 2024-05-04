import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Mens from "./components/mens-cloths/MensCloths";
import Women from "./components/womens-cloths/WomenCloths";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens-cloths/MensCloths" element={<Mens />} />
          <Route path="/womens-cloths/WomensCloths" element={<Women />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
