import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "../../models/Cart";
import { ShoppingMode, UpdateQtyMode } from "../../types/enum";

interface ShoppingType {
  name: string;
  mode: ShoppingMode;
  cart: Cart[];
}

interface QtyUpdateType {
  _id: string;
  mode: UpdateQtyMode;
}

const initialState: ShoppingType = {
  name: "",
  mode: ShoppingMode.EDIT,
  cart: [],
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Cart>) => {
      const existingCart = state.cart.find((item) => item._id === payload._id);
      if (existingCart) {
        existingCart.qty += 1;
      } else {
        state.cart.push(payload);
      }
    },
    updateQty: (state, { payload }: PayloadAction<QtyUpdateType>) => {
      const existingCart = state.cart.find((item) => item._id === payload._id);
      if (existingCart) {
        existingCart.qty += payload.mode;
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== payload);
    },
    markComplete: (state, { payload }: PayloadAction<string>) => {
      const existingCart = state.cart.find((item) => item._id === payload);
      if (existingCart) {
        existingCart.isCompleted = !existingCart.isCompleted;
      }
    },
    saveShopping: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
      state.mode = ShoppingMode.SAVED;
    },
    changeMode: (state, { payload }: PayloadAction<ShoppingMode>) => {
      state.mode = payload;
    },
  },
});

export const {
  addToCart,
  updateQty,
  removeFromCart,
  markComplete,
  saveShopping,
  changeMode,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
