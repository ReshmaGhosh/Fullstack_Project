import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { useEffect } from "react";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  selectIsLoading,
  selectProduct,
  fetchProduct,

} from "../features/cart/CartSlice";
import { ProductOrder } from "../../types/type";

// interface CartItem {
//   _id: string;
//   quantity: number;
// }

interface CartItemCardProps {
  item: ProductOrder;
}

function CartItemCard({ item }: CartItemCardProps) {
   const product = useSelector((state: RootState) => selectProduct(state));

  const isLoading = useSelector((state: RootState) => selectIsLoading(state));
  const dispatch = useDispatch<AppDispatch>();

  const increaseItemQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(increaseQuantity({ _id: item._id }));
  };

  const decreaseItemQuantiity = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(decreaseQuantity({ _id: item._id }));
  };

  const removeItem = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeFromCart({ _id: item._id }));
  };

  useEffect(() => {
    dispatch(fetchProduct(item._id));
  }, [dispatch, item._id]);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  
    return (
      <Card
        sx={{
          my: 2,
          width: "80rem",
          boxShadow: 3,
          border: "1px solid grey",
          backgroundColor: "#fafafa",
          p: 2,
        }}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              component={Link}
              to={`/product/${item._id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              {item.title }...
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <IconButton onClick={decreaseItemQuantiity} size="small">
                <FaMinus />
              </IconButton>
              <Typography variant="h6">{item.quantity}</Typography>
              <IconButton onClick={increaseItemQuantity} size="small">
                <FaPlus />
              </IconButton>
            </Box>
            <Typography variant="h6" align="center">
              {item.price
                ? (Number(item.price) * item.quantity).toFixed(2)
                : ""}
            </Typography>
            <Button variant="contained" color="error" onClick={removeItem}>
              Remove
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  

 
}

export default CartItemCard;
