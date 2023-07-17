// import React, { useEffect, useState } from "react";
// import NavBar from "../components/header/Navbar";
// import axios from "axios";
// import { error } from "console";
// import { light } from "@mui/material/styles/createPalette";

// function Toy() {
//   type Product = {
//     title: string;
//     price: string;
//     image: string;
//     description: string;
//   };
//   const [products, setProducts] = useState<Product[]>([]);

//   const url = "http://localhost:8000/products";

//   useEffect(() => {
//     axios
//       .get(url)
//       .then((res) => res)
//       .then((data) => setProducts(data.data))
//       .catch((error) => console.log(error));
//   }, []);
//   console.log(products, "products");

//   return (
//     <div>
//       <NavBar />
//       <h1>Toy</h1>

//       {products.map((product) => (
//         <div>

//           <p>{product.title}</p>
//           <p>{product.price}</p>
//           <img src={product.image} alt={product.title} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Toy;

// import React, { useEffect } from "react";
// import { RootState } from "../redux/store";

// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";

// import { useDispatch, useSelector } from "react-redux";
// import Footer from "../components/footer/Footer";
// import ProductCard from "../components/product/card/ProductCard";
// import NavBar from "../components/header/Navbar";
// import { Product } from "../types/type";
// import { AppDispatch } from "../redux/store";

// import {
//   setFilterTerm,
//   selectFilteredProducts,
//   selectAllProducts,
//   getAllProducts,
// } from "../components/features/product/ProductSlice";
// import {
//   addItemToWishlist,
//   removeItemFromWishlist,
// } from "../components/features/favourite/WishListSlice";

// function Toy() {
//   const dispatch: AppDispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   const {
//     isLoading,
//     error,
//     products: productsToShow,
//   } = useSelector((state: RootState) => state.products);

//   //const productsToShow: Product[] = useSelector(selectAllProducts);
//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

//   const isItemInWishlist = (productId: string) => {
//     return wishlistItems.some((item) => item._id === productId);
//   };

//   const handleToggleWishlist = (product: Product) => {
//     if (isItemInWishlist(product._id)) {
//       dispatch(removeItemFromWishlist(product._id));
//     } else {
//       dispatch(addItemToWishlist(product));
//     }
//   };

//   //   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //     dispatch(setFilterTerm(event.target.value));
//   //   };

//   if (isLoading) {
//     return <div>Loading...</div>; // Or your custom loading spinner
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Or your custom error component
//   }

//   return (
//     <div>
//       <NavBar />
//       <Box m={4}>
//         <Box mb={2}>
//           <h4>Showing Products from</h4>
//         </Box>
//         {/* <TextField
//           id="filled-search"
//           label="Search field"
//           type="search"
//           variant="filled"
//           onChange={handleSearchChange}
//         /> */}

//         <Grid container spacing={2}>
//           {productsToShow
//             ? productsToShow.map((p: Product) => {
//                 console.log(productsToShow, "product");
//                 return (
//                   <Grid item xs={12} sm={6} md={4} lg={2} key={p._id}>
//                     <ProductCard
//                       product={p}
//                       handleToggleWishlist={handleToggleWishlist}
//                       isItemInWishlist={isItemInWishlist}
//                     />
//                   </Grid>
//                 );
//               })
//             : null}
//         </Grid>
//       </Box>
//       <Footer />
//     </div>
//   );
// }

// export default Toy;

// src/components/Toy.tsx

// src/components/Toy.tsx

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../components/features/product/ProductSlice";
import { RootState, AppDispatch } from "../redux/store";
import { Product } from "../types/type";
import ProductCard from "../components/product/card/ProductCard";
import Grid from "@mui/material/Grid";
import NavBar from "../components/header/Navbar";

function Toy() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = (
      <div
        style={{
          backgroundColor: "#bad4f5",
          padding: "50px",
          marginTop: "-55px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            padding: "40px",
            fontSize: "35px",
            fontFamily: "Comic Sans MS, cursive, sans-serif",
          }}
        >
          Our Products
        </h1>

        <Grid container spacing={3}>
          {products.map((product: Product) => (
            <Grid item xs={4} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <NavBar />

      {content}
    </div>
  );
}

export default Toy;
