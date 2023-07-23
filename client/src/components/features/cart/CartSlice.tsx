// import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../../../redux/store";
// import axios from "axios";

// interface CartItem {
//   id: string;
//   quantity: number;
//   price: string;
// }
// interface Product {
//   id: string;
//   title: string;
//   price: string;
// }

// interface CartState {
//   carts: CartItem[];
//   product: Product | null;
//   error: string | null;
//   isLoading: boolean;
// }

// const initialState: CartState = {
//   carts: localStorage.getItem("carts")
//     ? JSON.parse(localStorage.getItem("carts")!)
//     : [],
//   product: null,
//   error: null,
//   isLoading: false,
// };

// export const fetchProduct = createAsyncThunk(
//   "cart/fetchProduct",
//   async (id: string) => {
//     const response = await axios.get(`http://localhost:8000/products/${id}`);
//     return response.data;
//   }
// );

// const CartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCarts: (state, action: PayloadAction<CartItem>) => {
//       if (!state.carts) {
//         state.carts = [action.payload];
//       } else {
//         const existItem = state.carts.find((i) => i.id === action.payload.id);

//         if (existItem) {
//           state.carts = state.carts.map((i) =>
//             i.id === action.payload.id
//               ? { ...i, quantity: i.quantity + action.payload.quantity }
//               : i
//           );
//         } else {
//           state.carts = [...state.carts, action.payload];
//         }
//       }

//       localStorage.setItem("carts", JSON.stringify(state.carts));
//     },
//     increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
//       state.carts = state.carts.map((product) =>
//         product.id === action.payload.id
//           ? { ...product, quantity: product.quantity + 1 }
//           : product
//       );

//       localStorage.setItem("carts", JSON.stringify(state.carts));
//     },
//     decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
//       const item = state.carts.find(
//         (product) => product.id === action.payload.id
//       );

//       if (item && item.quantity === 1) {
//         state.carts = state.carts.filter(
//           (product) => product.id !== action.payload.id
//         );
//       } else if (item) {
//         state.carts = state.carts.map((product) =>
//           product.id === action.payload.id
//             ? { ...product, quantity: product.quantity - 1 }
//             : product
//         );
//       }

//       localStorage.setItem("carts", JSON.stringify(state.carts));
//     },
//     removeFormCart: (state, action: PayloadAction<{ id: string }>) => {
//       state.carts = state.carts.filter(
//         (product) => product.id !== action.payload.id
//       );

//       localStorage.setItem("carts", JSON.stringify(state.carts));
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProduct.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchProduct.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.product = action.payload;
//       })
//       .addCase(fetchProduct.rejected, (state, action) => {
//         state.isLoading = false;
//         state.product = null;
//         state.error = action.error.message || null;
//       });
//   },
// });

// export const cartState = (state: RootState) => state.carts.carts;
// export const selectProduct = (state: RootState) => state.carts.product;
// export const selectIsLoading = (state: RootState) => state.carts.isLoading;

// export const {
//   addToCarts,
//   increaseQuantity,
//   decreaseQuantity,
//   removeFormCart,
// } = CartSlice.actions;

// export default CartSlice.reducer;

import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import axios from "axios";

export interface Product {
  _id: string;
  title: string;
  price: string;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  description: string;
  category?: string;
}

export type ProductOrder = Product & {
  quantity: number;
};

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
    addToCarts: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.carts.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const existingProduct = state.carts.find(
        (item) => item._id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const existingProduct = state.carts.find(
        (item) => item._id === action.payload.id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.carts.findIndex(
        (product) => product._id === action.payload.id
      );
      if (index !== -1) {
        state.carts.splice(index, 1);
      }
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
} = CartSlice.actions;

export default CartSlice.reducer;
