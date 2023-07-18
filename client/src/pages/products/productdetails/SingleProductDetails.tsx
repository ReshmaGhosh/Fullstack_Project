import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchProductById } from "../../../components/features/product/ProductSlice";
import { RootState, AppDispatch } from "../../../redux/store";
import NavBar from "../../../components/header/Navbar";
import { Grid, Typography, Box } from "@mui/material";

function SingleProductDetails() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<Record<string, string | undefined>>();
  const product = useSelector((state: RootState) => state.products.product);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "succeeded" && product) {
    return (
      <div>
        <NavBar />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%" }}
              />
              {/* 
              <img src={product.image2} alt={`${product.title}_2`} />
              <img src={product.image3} alt={`${product.title}_3`} />
              <img src={product.image4} alt={`${product.title}_4`} />
              */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "70px" }}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h5">SEK {product.price}</Typography><br />
            <Typography variant="body1">{product.description}</Typography>
          </Grid>
        </Grid>
      </div>
    );
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return null;
}

export default SingleProductDetails;
