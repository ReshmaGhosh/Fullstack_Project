import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../../types/type";
import { RootState } from "../../../redux/store";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://frontend-1w4w.onrender.com/products"
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: string) => {
    try {
      const response = await axios.get<Product>(
        `https://frontend-1w4w.onrender.com/products/${id}`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

interface ProductsState {
  products: Product[];
  product: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchTerm: string;
}

const initialState: ProductsState = {
  products: [],
  product: null,
  status: "idle",
  error: null,
  searchTerm: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProductById.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.status = "succeeded";
          state.product = action.payload;
        }
      )
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});
export const selectLatestProducts = createSelector(
  (state: RootState) => state.products.products,
  (products) => products.slice(0, 6)
);

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
