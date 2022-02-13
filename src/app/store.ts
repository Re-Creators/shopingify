import { configureStore } from "@reduxjs/toolkit";
import actionBarStateReducer from "../features/actionBarState/actionBarStateSlice";

export const store = configureStore({
  reducer: {
    actionBarState: actionBarStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
