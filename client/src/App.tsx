import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Toy from "./pages/Toy";
import Shop from "./pages/Shop";
import FunWithKulius from "./pages/FunWithKulius";
import About from "./pages/About";
import SingleProductDetails from "./pages/products/productdetails/SingleProductDetails";
import LoginPage from "./pages/LoginPage";
import LogInDetail from "./pages/LogInDetail";
import WishList from "./components/features/favourite/WishList";
import Cart from "./pages/Cart";
import ColorIt from "./pages/ColorIt";
import PartyTips from "./pages/PartyTips";
import Playing from "./pages/Playing";


function App() {
    //const products = useSelector((state: RootState) => state.products.products);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/toy" element={<Toy />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/funwithkulius" element={<FunWithKulius />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<LoginPage />} />
        <Route path="/login-detail" element={<LogInDetail />} />
        <Route path="/product/:id" element={<SingleProductDetails />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/colorit" element={<ColorIt />} />
        <Route path="/partytips" element={<PartyTips />} />
        <Route path="/playing" element={<Playing />} />
      </Routes>
    </div>
  );
}

export default App;
