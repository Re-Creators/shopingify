import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "../../models/Cart";
import { UpdateQtyMode } from "../../types/enum";

interface CartType {
  name: string;
  cart: Cart[];
}

interface QtyUpdateType {
  _id: string;
  mode: UpdateQtyMode;
}

const initialState: CartType = {
  name: "",
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
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

export const { addToCart, updateQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
