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
  removeFormCart,
  selectIsLoading,
  selectProduct,
  fetchProduct,
} from "../features/cart/CartSlice";

interface CartItem {
  id: string;
  quantity: number;
}

interface CartItemCardProps {
  item: CartItem;
}

function CartItemCard({ item }: CartItemCardProps) {
  const product = useSelector((state: RootState) => selectProduct(state));
  const isLoading = useSelector((state: RootState) => selectIsLoading(state));
  const dispatch = useDispatch<AppDispatch>();

  const increaseItemQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(increaseQuantity({ id: item.id }));
  };

  const decreaseItemQuantiity = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(decreaseQuantity({ id: item.id }));
  };

  const removeItem = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeFormCart({ id: item.id }));
  };

  useEffect(() => {
    dispatch(fetchProduct(item.id));
  }, [dispatch, item.id]);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (product) {
    return (
      <Card sx={{ my: 2 }}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              component={Link}
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              {product.title ? product.title.slice(0, 20) : ""}...
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
              {product.price
                ? (Number(product.price) * item.quantity).toFixed(2)
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

  return null;
}

export default CartItemCard;
