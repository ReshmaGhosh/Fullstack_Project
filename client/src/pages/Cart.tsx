import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
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

function Cart() {
  const state = useSelector((state: RootState) => state);
  const carts = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={2}>
          {!carts.length && (
            <Grid item xs={12} className="my-5 text-center text-danger">
              <Typography variant="h4">
                You don't have any product in carts.{" "}
                <Link to="/products" className="text-dark text-decoration-none">
                  {" "}
                  Go for shopping{" "}
                </Link>
              </Typography>
            </Grid>
          )}
          {carts.length > 0 &&
            carts.map((c) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={c.id}>
                <CartItemCard item={c} />
              </Grid>
            ))}
        </Grid>

        {carts.length > 0 && (
          <div className="my-3">
            <Card>
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
                      <Button variant="contained" color="primary">
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
      <Footer />
    </div>
  );
}

export default Cart;
