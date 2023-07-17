// import React, { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../redux/store";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";

// import { removeItemFromWishlist } from "../favourite/WishListSlice";
// import Footer from "../../footer/Footer";
// import ProductCard from "../../product/card/ProductCard";
// import NavBar from "../../header/Navbar";
// import { Product } from "../../../types/type";


// function WishList() {
//   const dispatch = useDispatch();
//   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
//   const [open, setOpen] = useState(false);

//   const isItemInWishlist = (productId: string) => {
//     return wishlistItems.some((item) => item._id === productId);
//   };

//   const handleToggleWishlist = (product: Product) => {
//     if (isItemInWishlist(product._id)) {
//       dispatch(removeItemFromWishlist(product._id));
//       setOpen(true);
//     }
//   };

//   const handleClose = (
//     event: React.SyntheticEvent | Event,
//     reason?: string
//   ) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <div>
//       <NavBar />
//       <br />
//       <br />
//       <br />
//       <Container>
//         <h4 className="mb-4"> Your Wishlist</h4>
//         <Grid container spacing={3}>
//           {wishlistItems.map((product) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
//               <ProductCard
//                 key={product._id}
//                 product={product}
//                 handleToggleWishlist={() => handleToggleWishlist(product)}
//                 isItemInWishlist={isItemInWishlist}
//               />
//             </Grid>
//           ))}
//         </Grid>

//         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//           <Alert
//             onClose={handleClose}
//             severity="success"
//             sx={{ width: "100%" }}
//           >
//             Product removed from wishlist!
//           </Alert>
//         </Snackbar>
//       </Container>

//       <Footer />
//     </div>
//   );
// }

// export default WishList;

import React from 'react'

function WishList() {
  return (
    <div>WishList</div>
  )
}

export default WishList