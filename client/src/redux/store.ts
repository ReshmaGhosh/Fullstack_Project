


// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import ProductSlice from "../components/features/product/ProductSlice";
//  import { useDispatch } from "react-redux";
// import WishListSlice from "../components/features/favourite/WishListSlice";

// const store = configureStore({
//   reducer: {
//     products: ProductSlice,
//     wishlist: WishListSlice,
//   },
// });

// setupListeners(store.dispatch);

// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

// src/redux/store.ts

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/features/product/ProductSlice"
import WishListSlice from "../components/features/favourite/WishListSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: WishListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
