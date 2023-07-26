import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";

import NavBar from "../../../components/header/Navbar";
import { fetchProductById } from "../../../components/features/product/ProductSlice";
import { addToCarts } from "../../../components/features/cart/CartSlice";
import { Product, ProductOrder } from "../../../types/type";

function SingleProductDetails() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<Record<string, string | undefined>>();
  const product = useSelector((state: RootState) => state.products.product);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  const [quantity, setQuantity] = useState(0);
console.log(id, "id");
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (product) {
      const item: ProductOrder = {
        ...product,

        // _id: product._id,
        quantity: quantity,
        // price: product.price,
      };
      dispatch(addToCarts(item));
    }
  };

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
          <Grid item xs={12} className="text-end"></Grid>

          <Grid item xs={12} sm={6}>
            <Box>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "70px" }}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h5">SEK {product.price}</Typography>
            <br />
            <Typography variant="body1">{product.description}</Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <IconButton onClick={decreaseQuantity}>
                <FaMinus />
              </IconButton>
              <TextField
                type="number"
                value={quantity}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
                size="small"
                style={{ width: 60, margin: "0 15px" }}
              />
              <IconButton onClick={increaseQuantity}>
                <FaPlus />
              </IconButton>
            </Box>
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={addToCart}>
                Add to Cart
              </Button>

              <Button variant="contained" color="secondary" className="ms-2">
                Buy Now
              </Button>
            </Box>
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
