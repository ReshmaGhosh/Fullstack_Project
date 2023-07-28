import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface PlayingData {
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
    const response = await axios.get(
      "https://backend-ege3.onrender.com/playing"
    );
    return response.data;
  }
);

export const fetchPlayingById = createAsyncThunk(
  "playing/fetchPlayingById",
  async (id: string) => {
    const response = await axios.get(
      `https://backend-ege3.onrender.com/playing/${id}`
    );
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
      })

      .addCase(fetchPlayingById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPlayingById.fulfilled,
        (state, action: PayloadAction<PlayingData>) => {
          state.status = "succeeded";
          state.playing = [action.payload];
        }
      )
      .addCase(fetchPlayingById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default playingSlice.reducer;
