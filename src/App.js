import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import Mens from './components/mens-cloths/MensCloths';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
    
        <Route path="*" element={<Home />}>
        <Route path="Mens" element={<Mens />} />
        {/*   <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>

//   <div className='mw-page-container'>
//     <Header></Header>
//     <Home></Home>
// </div>
  );
}

export default App;
