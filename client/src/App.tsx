import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

import HomePage from "./pages/HomePage";
import Toy from "./pages/Toy";
import Shop from "./pages/Shop";
import FunWithKulius from "./pages/FunWithKulius";
import About from "./pages/About";


function App() {
    const products = useSelector((state: RootState) => state.products.products);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/toy" element={<Toy />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/funwithkulius" element={<FunWithKulius />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
    </div>
  );
}

export default App;
