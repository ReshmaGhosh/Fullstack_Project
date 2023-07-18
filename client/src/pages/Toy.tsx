
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../components/features/product/ProductSlice";
import { RootState, AppDispatch } from "../redux/store";
import { Product } from "../types/type";
import ProductCard from "../components/product/card/ProductCard";
import Grid from "@mui/material/Grid";
import NavBar from "../components/header/Navbar";

function Toy() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);
  const searchTerm = useSelector(
    (state: RootState) => state.products.searchTerm
  );

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = (
      <div
        style={{
          backgroundColor: "#bad4f5",
          padding: "50px",
          marginTop: "-55px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            padding: "40px",
            fontSize: "35px",
            fontFamily: "Comic Sans MS, cursive, sans-serif",
          }}
        >
          Our Products
        </h1>

        <Grid container spacing={3}>
          {(searchTerm ? filteredProducts : products).map(
            (product: Product) => (
              <Grid item xs={4} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            )
          )}
        </Grid>
      </div>
    );
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <NavBar />

      {content}
    </div>
  );
}

export default Toy;
