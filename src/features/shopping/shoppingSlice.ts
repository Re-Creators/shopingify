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
  },
});

export const { addToCart, updateQty, removeFromCart } = shoppingSlice.actions;
export default shoppingSlice.reducer;
