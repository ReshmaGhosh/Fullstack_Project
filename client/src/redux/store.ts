import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/features/product/ProductSlice";
import WishListSlice from "../components/features/favourite/WishListSlice";
import CartSlice from "../components/features/cart/CartSlice";
import ColorItSlice from "../components/features/colorit/ColorItSlice";
import PartyTipsSlice from "../components/features/partyTips/PartyTipsSlice";
import PlayingSlice from "../components/features/playing/PlayingSlice";
import UserSlice from "../components/features/user/UserSlice";
import orderReducer from "./slice/order";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: WishListSlice,
    carts: CartSlice,
  
    colorIt: ColorItSlice,
    partyTips: PartyTipsSlice,
    playing: PlayingSlice,
    users: UserSlice,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
