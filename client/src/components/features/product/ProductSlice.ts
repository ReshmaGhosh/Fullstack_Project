// import {
//   PayloadAction,
//   createAsyncThunk,
//   createSelector,
//   createSlice,
// } from "@reduxjs/toolkit";
// import axios, { AxiosError } from "axios";
// import { RootState } from "../../../redux/store";

// import { axiosErrorHandler } from "../../../Utils/axiosErrorHandler";
// import { Product } from "../../../types/type";

// export const getAllProducts = createAsyncThunk<Product[]>(
//   "products/fetchAllProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get("http://localhost:8000/products");
//       console.log(data, "data");
//       return data.products;
//     } catch (error) {
//       //return axiosErrorHandler(error as AxiosError);
//       const axiosError = error as AxiosError;
//       return rejectWithValue(axiosError.response?.data);
//     }
//   }
// );
// interface ProductsState {
//   isLoading: boolean;
//   products: Product[];
//   filterTerm: string;
//   //sortOption: string;
//   error: string | null;
// }

// const initialState: ProductsState = {
//   isLoading: false,
//   products: [],
//   filterTerm: " ",
//   //sortOption: " ",
//   error: null,
// };

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setFilterTerm: (state, action: PayloadAction<string>) => {
//       state.filterTerm = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getAllProducts.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(
//       getAllProducts.fulfilled,
//       (state, action: PayloadAction<Product[]>) => {
//         state.isLoading = false;
//         state.products = action.payload;
//         state.error = null;
//       }
//     );
//     builder.addCase(getAllProducts.rejected, (state, action) => {
//       state.isLoading = false;
//       state.products = [];
//       state.error = action.error.message || null;
//     });
//   },
// });

// export const { setFilterTerm } = productSlice.actions;

// export const selectFilteredProducts = createSelector(
//   (state: RootState) => state.products.products,
//   (state: RootState) => state.products.filterTerm,
//   (products, filterTerm) => {
//     let filteredProducts = products.filter((product) =>
//       product.title.toLowerCase().includes(filterTerm.toLowerCase())
//     );
//     return filteredProducts;
//   }
// );
// export const selectAllProducts = (state: RootState) =>
//   state.products?.products || [];

// export default productSlice.reducer;

// src/redux/slices/productSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from "../../../types/type";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get<Product[]>(
        "http://localhost:8000/products"
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
    error: null,
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    },
});

export default productSlice.reducer;
