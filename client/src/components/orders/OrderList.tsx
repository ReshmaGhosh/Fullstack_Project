import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import ProductOrderList from "./ProductOrderList";
import { fetchOrderData } from "./OrderSlice";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

export default function OrderList() {
  const orderList = useSelector((state: RootState) => state.order.orderList);
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userDetail) {
      dispatch(fetchOrderData(userDetail._id));
    }
  }, [dispatch, userDetail]);
  console.log(orderList, "order");

  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: "#FFF9C4", minHeight: "100vh", py: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Order List
        </Typography>

        {orderList.map((item) => (
          <Card sx={{ my: 2 }} key={item._id}>
            <CardContent>
              <Typography variant="h6">
                Order Date: {new Date(item.createdAt).toLocaleDateString()}
              </Typography>

              {item.productList.map((product) => (
                <ProductOrderList key={product._id} product={product} />
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
