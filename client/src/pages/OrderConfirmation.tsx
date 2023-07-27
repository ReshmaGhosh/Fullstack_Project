import React from "react";
import { Typography, Container, Box } from "@material-ui/core";

function OrderConfirmation() {
  return (
    <Container maxWidth="sm">
      <Box
        my={4}
        style={{
          backgroundColor: "#f3f3f3",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Order Confirmation
        </Typography>
        <Typography variant="body1" gutterBottom>
          Thank you for your order! Your order has been created and you will
          receive an email confirmation shortly. We appreciate your business.
        </Typography>
      </Box>
    </Container>
  );
}

export default OrderConfirmation;
