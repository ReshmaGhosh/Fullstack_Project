import React, { useEffect, useState } from "react";
import NavBar from "../components/header/Navbar";
import axios from "axios";
import { error } from "console";
import { light } from "@mui/material/styles/createPalette";

function Toy() {
  type Product = {
    title: string;
    price: string;
    image: string;
    description: string;
  };
  const [products, setProducts] = useState<Product[]>([]);

  const url = "http://localhost:8000/products";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res)
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(products, "products");

  return (
    <div>
      <NavBar />
      <h1>Toy</h1>

      {products.map((product) => (
        <div>
          
          <p>{product.title}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
}

export default Toy;
