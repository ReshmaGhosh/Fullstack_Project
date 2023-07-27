
import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import axios from "axios";

import { Product, ProductOrder } from "../../../types/type";


interface CartState {
  carts: ProductOrder[];
  product: Product | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: CartState = {
  carts: [],
  product: null,
  error: null,
  isLoading: false,
};

export const fetchProduct = createAsyncThunk(
  "cart/fetchProduct",
  async (_id: string) => {
    const response = await axios.get(`http://localhost:8000/products/${_id}`);
    return response.data;
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCarts: (state, action: PayloadAction<ProductOrder>) => {
      console.log("Before:", state.carts);
      console.log("Adding:", action.payload);
      if (state.carts.length === 0) {
        state.carts = [action.payload];
      } else {
        const existItem = state.carts.find((i) => i._id === action.payload._id);

        if (existItem) {
          state.carts = state.carts.map((i) =>
            i._id === action.payload._id
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          );
        } else {
          state.carts = [...state.carts, action.payload];
        }
      }

      console.log("After:", state.carts);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    increaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      state.carts = state.carts.map((product) =>
        product._id === action.payload._id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    decreaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.carts.find(
        (product) => product._id === action.payload._id
      );

      if (item && item.quantity === 1) {
        state.carts = state.carts.filter(
          (product) => product._id !== action.payload._id
        );
      } else if (item) {
        state.carts = state.carts.map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      state.carts = state.carts.filter(
        (product) => product._id !== action.payload._id
      );

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    clearCart: (state) => {
      state.carts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.product = null;
        state.error = action.error.message || null;
      });
  },
});

export const cartState = (state: RootState) => state.carts.carts;
export const selectProduct = (state: RootState) => state.carts.product;
export const selectIsLoading = (state: RootState) => state.carts.isLoading;

export const {
  addToCarts,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
