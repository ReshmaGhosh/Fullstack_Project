import React from "react";
import LatestProducts from "../components/product/LatestProducts";
import NavBar from "../components/header/Navbar";
import FunnyKulius from "../components/product/FunnyKulius";



function HomePage() {
  const publicUrl = process.env.PUBLIC_URL;
  console.log(publicUrl);
  return (
    <div>
      <NavBar />

      <img
        src={`${publicUrl}/images/katalog.png`}
        alt="Catalog"
        width="815"
        height="500"
        style={{
          position: "relative",
          top: "-55px",
          zIndex: 1,
          marginRight: "10px",
        }}
      />
      <img
        src={`${publicUrl}/images/butik.png`}
        alt="Shop"
        width="600"
        height="500"
        style={{
          position: "relative",
          top: "-55px",
          zIndex: 1,
          marginLeft: "10px",
        }}
      />
      <LatestProducts />
     
      <img
        src={`${publicUrl}/images/kulmedkulius.png`}
        alt="Kulmedkulius"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
     <FunnyKulius/>
    </div>
  );
}

export default HomePage;
