import { User } from "./../../../types/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";

type InitialState = {
  userInformation: User | null;
  isAuthenticated: boolean;
};

const initialState: InitialState = {
  userInformation: null,
  isAuthenticated: false,
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.isAuthenticated = true;
    },

    setUserData: (state, action: PayloadAction<User>) => {
      state.userInformation = action.payload;
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
