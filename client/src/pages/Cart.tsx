import React from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../components/cart/CartItemCard";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import { useNavigate } from "react-router-dom";

import {
  subTotalPrice,
  totalPrice,
  totalTax,
} from "../components/features/cart/CartSelector";
import { clearCart } from "../components/features/cart/CartSlice";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import axios from "axios";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );
  const state = useSelector((state: RootState) => state);
  const carts = useSelector((state: RootState) => state.carts.carts);

  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);

  function onClickHandler() {
    if (!userDetail) {
      alert("Please login to continue");

      navigate("/user");
      return;
    }

    // send data to backend
    const token = localStorage.getItem("userToken");
    const url = `https://backend-ege3.onrender.com/orders/${userDetail?._id}`;

    axios
      .post(
        url,
        { productList: carts },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "new data");
        if (res.status === 201) {
          alert("Thanks for shopping with us");

          dispatch(clearCart());
          navigate("/order-confirmation");
        }
      })

      .catch((error) => {
        if (error.response.status === 401) {
          alert("pls log in to make order");
          return;
        }
      });
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />

      <Container>
        <Grid container spacing={2}>
          {!carts.length && (
            <Grid item xs={12} className="my-5 text-center text-danger">
              <Typography variant="h4">
                You don't have any product in carts.{" "}
                <Link to="/toy" className="text-dark text-decoration-none">
                  {" "}
                  Go for shopping{" "}
                </Link>
              </Typography>
            </Grid>
          )}
          {carts.length > 0 &&
            carts.map((c) => (
              <Grid item xs={12} key={c._id}>
                <CartItemCard item={c} />
              </Grid>
            ))}
        </Grid>

        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6} sm={3}>
              <Typography variant="h6">Subtotal: SEK {subTotal}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6">Tax(2%): SEK {tax}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6">
                Total Price: SEK {totalAmmount.toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onClickHandler}
                >
                  Checkout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Container>
      <div style={{ marginTop: "200px" }}>
        <Box mt={15}>
          <Footer />
        </Box>
      </div>
    </div>
  );
}

export default Cart;
