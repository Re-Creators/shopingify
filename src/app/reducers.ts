import { combineReducers } from "@reduxjs/toolkit";
import actionBarStateReducer from "../features/actionBarState/actionBarStateSlice";
import categoryItemReducer from "../features/categoryItem/categoryItemSlice";
import shoppingReducer from "../features/shopping/shoppingSlice";

export default combineReducers({
  actionBarState: actionBarStateReducer,
  categoryItem: categoryItemReducer,
  shopping: shoppingReducer,
});
