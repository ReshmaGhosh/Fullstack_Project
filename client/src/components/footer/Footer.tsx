import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        position: "relative",
        bottom: 0,
        left: 0,
        display: "flex",
        width: "100%",
        marginTop: "-5.6rem",
        height: "27rem",
        zIndex: 100,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "4.5rem",
        background: `url("/images/footer-bg-05.png") top center / 120% no-repeat`,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img
            src="/images/footer1.png"
            alt="Footer"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              textAlign: "left",
              paddingLeft: "240px",
            }}
          >
            <Typography variant="h6">
              <Link
                to="/toy"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Toy
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                to="/shop"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Shop
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                to="/funwithkulius"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Fun with Kulius
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </Typography>
          </ul>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" align="left" paddingTop={2} paddingLeft={2}>
            Fauget AB
          </Typography>
          <Typography variant="body2" align="left" paddingLeft={2}>
            Lund Central 223 52 ,Lund Questions about the range?
          </Typography>
          <Typography variant="body2" align="left" paddingLeft={2}>
            <Link
              to="/shop"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact your Fauget store
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
