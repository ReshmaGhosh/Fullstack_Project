import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../redux/store";
import { Order } from "../../types/type";

interface OrderState {
  orderList: Order[];
  status: "idle" | "loading" | "failed";
}

const initialState: OrderState = {
  orderList: [],
  status: "idle",
};

// Thunk function for fetching orders
export const fetchOrderData = createAsyncThunk(
  "order/fetchOrderData",
  async (userId: string) => {
    const response = await axios.get(
      `https://backend-ege3.onrender.com/orders/${userId}`
    );
    return response.data as Order[];
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchOrderData.fulfilled,
        (state, action: PayloadAction<Order[]>) => {
          state.status = "idle";
          state.orderList = action.payload;
        }
      )
      .addCase(fetchOrderData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default orderSlice.reducer;

export const selectOrderList = (state: RootState) => state.order.orderList;
