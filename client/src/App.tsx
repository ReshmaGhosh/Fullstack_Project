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
import OrderList from "./components/orders/OrderList";
import OrderDetail from "./components/orders/OrderDetail";
import ColorItDetail from "./components/features/colorit/ColorItDetail";
import PartyTipsDetail from "./components/features/partyTips/PartyTipsDetail";
import PlayingDetail from "./components/features/playing/PlayingDetail";
import UserInformation from "./components/features/user/UserInformation";

function App() {

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
        <Route path="/order/:id" element={<OrderDetail />} />
        <Route path="/colorit/:id" element={<ColorItDetail />} />
        <Route path="/partytips/:id" element={<PartyTipsDetail />} />
        <Route path="/playing/:id" element={<PlayingDetail />} />
        <Route path="/user-info" element={<UserInformation />} />
        <Route path="/order" element={<OrderList />} />
      </Routes>
    </div>
  );
}

export default App;
