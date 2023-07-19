
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/features/product/ProductSlice"
import WishListSlice from "../components/features/favourite/WishListSlice";
import CartSlice from "../components/features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: WishListSlice,
    carts: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
