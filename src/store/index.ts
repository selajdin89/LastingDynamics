import { configureStore } from "@reduxjs/toolkit";
import tabsSlice from "./tabs-slice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    tabs: tabsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
