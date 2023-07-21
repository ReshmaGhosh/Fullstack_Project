
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/features/product/ProductSlice"
import WishListSlice from "../components/features/favourite/WishListSlice";
import CartSlice from "../components/features/cart/CartSlice";
import CategorySlice from "../components/features/category/CategorySlice";
import ColorItSlice from "../components/features/colorit/ColorItSlice";
import PartyTipsSlice from "../components/features/partyTips/PartyTipsSlice";
import PlayingSlice from "../components/features/playing/PlayingSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: WishListSlice,
    carts: CartSlice,
    categories: CategorySlice,
    colorIt: ColorItSlice,
    partyTips: PartyTipsSlice,
    playing: PlayingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

