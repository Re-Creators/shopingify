import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import actionBarStateReducer from "../features/actionBarState/actionBarStateSlice";
import categoryItemReducer from "../features/categoryItem/categoryItemSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    actionBarState: actionBarStateReducer,
    categoryItem: categoryItemReducer,
    cart: cartReducer,
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
