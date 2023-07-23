import React from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "../components/cart/CartItemCard";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import {
  subTotalPrice,
  totalPrice,
  totalTax,
} from "../components/features/cart/CartSelector";
import { cartState } from "../components/features/cart/CartSlice";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import axios from "axios";

function Cart() {
  const dispatch = useDispatch();
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );
  const state = useSelector((state: RootState) => state);
  const carts = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);

  function onClickHandler() {
    // send data to backend
    const token = localStorage.getItem("userToken");
    const url = `http://localhost:8000/orders/${userDetail?._id}`;

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
        if (res && res.status === 200) {
          // Clear the cart if the request is successful
          dispatch(clearCart());
          alert("Thanks for shopping with us");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // alert user
          alert("Please log in to make an order");
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

        {carts.length > 0 && (
          <div className="my-3">
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
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item xs={6} sm={3}>
                    <Typography variant="h6">Subtotal: ${subTotal}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="h6">Tax(2%): ${tax}</Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="h6">
                      Total Price: ${totalAmmount.toFixed(2)}
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
            </Card>
          </div>
        )}
      </Container>
      <div style={{ marginTop: "200px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
function clearCart(): any {
  throw new Error("Function not implemented.");
}
