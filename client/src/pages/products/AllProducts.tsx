// import React, { useEffect } from "react";
// import { RootState } from "../../redux/store"; 

// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";

// import { useDispatch,useSelector } from "react-redux";
// import Footer from "../../components/footer/Footer";
// import ProductCard from "../../components/product/card/ProductCard";
// import NavBar from "../../components/header/Navbar";
// import { Product } from "../../types/type"; 
// import {
//   setFilterTerm,
//   selectFilteredProducts,

// } from "../../components/features/product/ProductSlice";
// import {
//   addItemToWishlist,
//   removeItemFromWishlist,
// } from "../../components/features/favourite/WishListSlice";

// function AllProducts() {
//   const dispatch = useDispatch();
//    const productsToShow: Product[] = useSelector(selectFilteredProducts);
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

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(setFilterTerm(event.target.value));
//   };

//   return (
//     <div>
//       <NavBar />
//       <Box m={4}>
//         <Box mb={2}>
//           <h4>Showing Products from</h4>
//         </Box>
//         <TextField
//           id="filled-search"
//           label="Search field"
//           type="search"
//           variant="filled"
//           onChange={handleSearchChange}
//         />

//         <Grid container spacing={2}>
//           {productsToShow.map((p: Product) => {
//             return (
//               <Grid item xs={12} sm={6} md={4} lg={2} key={p._id}>
//                 <ProductCard
//                   product={p}
//                   handleToggleWishlist={handleToggleWishlist}
//                   isItemInWishlist={isItemInWishlist}
//                 />
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//       <Footer />
//     </div>
//   );
// }



// export default AllProducts;
import React from 'react'

function AllProducts() {
  return (
    <div>AllProducts</div>
  )
}

export default AllProducts