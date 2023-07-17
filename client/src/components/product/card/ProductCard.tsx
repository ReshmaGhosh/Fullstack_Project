import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
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
}

//   handleToggleWishlist: (product: Product) => void;
//   isItemInWishlist: (productId: string) => boolean;

function ProductCard({ product }: ProductCardProps) {
  const color = getRandomColor();
  const StyledCard = styled(Card)({
    backgroundColor: color,
    borderRadius: "20px",
  });


const StyledTypographyTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontFamily: "Comic Sans MS, cursive, sans-serif",
});

const StyledTypographyPrice = styled(Typography)({
  fontSize: "1.2rem",
  fontFamily: "Comic Sans MS, cursive, sans-serif",
});

const StyledFavoriteIcon = styled(FavoriteIcon)({
  cursor: "pointer",
  "&:hover": {
    color: "red",
  },
});

const StyledBox = styled(Box)({
  height: "400px",
  backgroundSize: "contain",
});


  const firstImage = product.image || "";

  //   const handleHeartClick = (event: React.MouseEvent) => {
  //     event.preventDefault();
  //     handleToggleWishlist(product);
  //   };

  return (
    <div>
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <StyledCard>
          <StyledBox
            style={{
              backgroundImage: `url(${firstImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          <CardContent>
            <StyledTypographyTitle variant="subtitle1" >
              {product.title}
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
          </CardContent>
          <StyledFavoriteIcon />
        </StyledCard>
      </Link>
    </div>
  );
}

export default ProductCard;
