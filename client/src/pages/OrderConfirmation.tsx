import React from "react";
import { Typography, Container, Box } from "@material-ui/core";

function OrderConfirmation() {
  return (
    <Container maxWidth="md" style={{ marginTop: "100px" }}>
      <Box
        my={8}
        mx="auto"
        style={{
          backgroundColor: "lightpink",
          padding: "40px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Order Confirmation
        </Typography>
        <Typography variant="h5" gutterBottom>
          Thank you for your order! Your order has been created and you will
          receive an email confirmation shortly. We appreciate your business.
        </Typography>
      </Box>
    </Container>
  );
}

export default OrderConfirmation;
