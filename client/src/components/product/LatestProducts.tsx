
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardContent, Typography, Box, Grid, Card } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/system";

import { RootState } from "../../redux/store";
import { selectLatestProducts } from "../features/product/ProductSlice";

const getRandomColor = () => {
  let letters = "BCDEF9";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

function LatestProducts() {
  const latestProducts = useSelector(selectLatestProducts);

  const StyledTypographyTitle = styled(Typography)({
    fontSize: "1.2rem",
    fontFamily: "Comic Sans MS, cursive, sans-serif",
  });

  const StyledTypographyPrice = styled(Typography)({
    fontSize: "1rem",
    fontFamily: "Comic Sans MS, cursive, sans-serif",
  });

  const StyledFavoriteIcon = styled(FavoriteIcon)({
    cursor: "pointer",
    color: "white",
    backgroundColor: "lightblue",
    borderRadius: "50%",
    padding: "5px",
    fontSize: "40px",
    "&:hover": {
      color: "red",
    },
  });

  const StyledBox = styled(Box)({
    height: "400px",
    backgroundSize: "contain",
  });

  return (
    <div
      style={{
        backgroundColor: "rgba(141,200,242,1)",
        paddingTop: "70px",
        marginTop: "-40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5em",
          fontWeight: "bold",
          fontFamily: "Comic Sans MS, cursive, sans-serif",
        }}
      >
        Latest Products
      </h1>

      <Grid container spacing={2} style={{ padding: "20px" }}>
        {latestProducts.map((product) => {
          const firstImage = product.image || "";
          const color = getRandomColor();

          const StyledCard = styled(Card)({
            backgroundColor: color,
            borderRadius: "20px",
          });

          return (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none" }}
              >
                <StyledCard>
                  <StyledBox
                    style={{
                      backgroundImage: `url(${firstImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <CardContent style={{ backgroundColor: "transparent" }}>
                    <StyledTypographyTitle variant="subtitle1">
                      {product.title}
                    </StyledTypographyTitle>

                    <StyledTypographyPrice variant="body1" color="text.primary">
                      SEK {product.price}
                    </StyledTypographyPrice>

                    <StyledFavoriteIcon />
                  </CardContent>
                </StyledCard>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default LatestProducts;

