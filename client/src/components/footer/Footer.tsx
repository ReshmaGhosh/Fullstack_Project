// import React from "react";

// function Footer() {
//   return (
//     <div
//       style={{
//         position: "relative",
//         bottom: 0,
//         left: 0,
//         display: "flex",
//         width: "100%",
//         marginTop: "-5.6rem",
//         height: "30rem",
//         zIndex: 100,
//         justifyContent: "flex-end",
//         alignItems: "flex-end",
//         padding: "4.5rem",
//         background: `url("/images/footer-bg-05.png") top center / 120% no-repeat`,
//       }}
//     ></div>
//   );
// }

// export default Footer;

import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";



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
                href="/toy"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Toy
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                href="/shop"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Shop
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                href="/funwithkulius"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Fun with Kulius
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                href="/about"
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
            <MuiLink href="/shop">Contact your Fauget store</MuiLink>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
