import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import actionBarStateReducer from "../features/actionBarState/actionBarStateSlice";
import itemsStateReducer from "../features/items/itemsSlice";

export const store = configureStore({
  reducer: {
    actionBarState: actionBarStateReducer,
    items: itemsStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
