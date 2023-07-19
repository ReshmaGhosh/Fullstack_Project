import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Box, Grid } from "@mui/material";

import { removeItemFromWishlist } from "../favourite/WishListSlice";
import ProductCard from "../../product/card/ProductCard";
import { Product } from "../../../types/type";
import Navbar from "../../header/Navbar";
import Footer from "../../footer/Footer";

function WishList() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const [open, setOpen] = useState(false);

  const isItemInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item._id === productId);
  };

  const handleToggleWishlist = (product: Product) => {
    if (isItemInWishlist(product._id)) {
      dispatch(removeItemFromWishlist(product._id));
      setOpen(true);
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Navbar />
      <br />

      <Box sx={{ p: 5 }}>
        <h1 className="mb-4"> Your Wishlist</h1>
        <Grid container spacing={4}>
          {wishlistItems.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={product._id}>
              <Box pb={9}>
                <ProductCard
                  key={product._id}
                  product={product}
                  handleToggleWishlist={() => handleToggleWishlist(product)}
                  isItemInWishlist={isItemInWishlist}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product removed from wishlist!
          </Alert>
        </Snackbar>
      </Box>

      <Footer />
    </div>
  );
}

export default WishList;
