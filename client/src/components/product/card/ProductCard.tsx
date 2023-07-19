
import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/system";

import { Product } from "../../../types/type";


const getRandomColor = () => {
  let letters = "BCDEF9";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

interface ProductCardProps {
  product: Product;
  handleToggleWishlist?: (product: Product) => void;
  isItemInWishlist?: (productId: string) => boolean;
}

const StyledCard = styled(Card)({
  borderRadius: "20px",
});

const StyledBox = styled(Box)({
  height: "400px",
  backgroundSize: "contain",
  backgroundBlendMode: "overlay",
});

function ProductCard({
  product,
  handleToggleWishlist,
  isItemInWishlist,
}: ProductCardProps) {
  const color = getRandomColor();

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

  const firstImage = product.image || "";

  const handleHeartClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (handleToggleWishlist) {
      handleToggleWishlist(product);
    }
  };
  const isWishlistItem = isItemInWishlist
    ? isItemInWishlist(product._id)
    : false;

  return (
    <div>
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <StyledCard style={{ backgroundColor: color }}>
          <StyledBox
            style={{
              backgroundImage: `url(${firstImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          <CardContent style={{ backgroundColor: "transparent" }}>
            <div style={{ height: "50px" }} />
            <StyledTypographyTitle variant="subtitle1">
              {product.title && product.title.slice(0, 25)}
            </StyledTypographyTitle>

            <StyledTypographyPrice variant="body1" color="text.primary">
              SEK {product.price}
            </StyledTypographyPrice>

            <div className="py-2 d-flex justify-content-center fs-6">
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              ></Box>
            </div>
            <StyledFavoriteIcon
              onClick={handleHeartClick}
              style={{ color: isWishlistItem ? "red" : "white" }}
            />
          </CardContent>
        </StyledCard>
      </Link>
    </div>
  );
}

export default ProductCard;
