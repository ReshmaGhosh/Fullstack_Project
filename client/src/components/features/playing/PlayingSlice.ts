import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface PlayingData {
  _id: string;
  title: string;
  description: string;
  method: string;
  image: string;
}

interface PlayingState {
  playing: PlayingData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: PlayingState = {
  playing: [],
  status: "idle",
  error: null,
};

export const fetchPlaying = createAsyncThunk(
  "playing/fetchPlaying",
  async () => {
    const response = await axios.get("http://localhost:8000/playing");
    return response.data;
  }
);

const playingSlice = createSlice({
  name: "playing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaying.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPlaying.fulfilled,
        (state, action: PayloadAction<PlayingData[]>) => {
          state.status = "succeeded";
          state.playing = action.payload;
        }
      )
      .addCase(fetchPlaying.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default playingSlice.reducer;
