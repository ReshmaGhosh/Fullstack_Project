import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface PartyTipsData {
  _id: string;
  title: string;
  description: string;
  method: string;
  image: string;
}

interface PartyTipsState {
  partyTips: PartyTipsData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: PartyTipsState = {
  partyTips: [],
  status: "idle",
  error: null,
};

export const fetchPartyTips = createAsyncThunk("partyTips/fetchPartyTips", async () => {
  const response = await axios.get("http://localhost:8000/partytips");
  return response.data;
});

const partyTipsSlice = createSlice({
  name: "partyTips",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartyTips.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPartyTips.fulfilled,
        (state, action: PayloadAction<PartyTipsData[]>) => {
          state.status = "succeeded";
          state.partyTips = action.payload;
        }
      )
      .addCase(fetchPartyTips.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default partyTipsSlice.reducer;