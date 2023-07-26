import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

 export interface ColorData {
  _id: string;
  title: string;
  description: string;
  image: string;
}

interface ColorItState {
  color: ColorData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: ColorItState = {
  color: [],
  status: "idle",
  error: null,
};

export const fetchColor = createAsyncThunk("colorIt/fetchColor", async () => {
  const response = await axios.get("http://localhost:8000/colorit");
  return response.data;
});

export const fetchColorById = createAsyncThunk(
  "colorIt/fetchColorById",
  async (id: string) => {
    const response = await axios.get(`http://localhost:8000/colorit/${id}`);
    return response.data;
  }
);

const colorItSlice = createSlice({
  name: "colorIt",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchColor.fulfilled,
        (state, action: PayloadAction<ColorData[]>) => {
          state.status = "succeeded";
          state.color = action.payload;
        }
      )
      .addCase(fetchColor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchColorById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchColorById.fulfilled, (state, action: PayloadAction<ColorData>) => {
        state.status = "succeeded";
        state.color = [action.payload];
      })
      .addCase(fetchColorById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default colorItSlice.reducer;
