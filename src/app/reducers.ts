import { combineReducers } from "@reduxjs/toolkit";
import actionBarStateReducer from "../features/actionBarState/actionBarStateSlice";
import categoryItemReducer from "../features/categoryItem/categoryItemSlice";
import shoppingReducer from "../features/shopping/shoppingSlice";
import statistiReducer from "../features/statistic/statisticSlice";
import userReducer from "../features/user/userSlice";

export default combineReducers({
  actionBarState: actionBarStateReducer,
  categoryItem: categoryItemReducer,
  shopping: shoppingReducer,
  statistic: statistiReducer,
  user: userReducer,
});
