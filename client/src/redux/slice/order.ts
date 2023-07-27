// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// import { Order } from "../../types/type";

// // type InitialState = {
// //   orderList: Order[];
// //   orderDetail: Order | null;
// // };
// export interface OrderState {
//   orderList: Order[];
//   orderDetail: Order | null; 
// }


// const initialState: OrderState = {
//   orderList: [],
//   orderDetail: null,
// };


// const orderSlice = createSlice({
//   name: "orders",
//   initialState,
//   reducers: {
//     setOrderList: (state, action: PayloadAction<Order[]>) => {
//       state.orderList = action.payload;
//     },
//     setOrderDetail: (state, action: PayloadAction<Order | null>) => {
//       state.orderDetail = action.payload;
//     },
//   },
// });

// export const orderActions = orderSlice.actions;
// const orderReducer = orderSlice.reducer;
// export default orderReducer;

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Order } from "../../types/type";

interface OrderState {
  orderList: Order[];
  orderDetail: Order | null;
}

const initialState: OrderState = {
  orderList: [],
  orderDetail: null,
};

export const fetchOrderDetail = createAsyncThunk(
  "orders/fetchOrderDetail",
  async (orderId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/orders/${orderId}`
      );
      return response.data as Order;
    } catch (err: any) {
        if (!err.response) {
          throw err;
        }
      return rejectWithValue(err.response.data);

    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrderList: (state, action: PayloadAction<Order[]>) => {
      state.orderList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchOrderDetail.fulfilled,
      (state, action: PayloadAction<Order>) => {
        state.orderDetail = action.payload;
      }
    );
  },
});

export const { setOrderList } = orderSlice.actions;

export default orderSlice.reducer;
