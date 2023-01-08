import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { setIsAuth } = authSlice.actions;
export default authSlice;
