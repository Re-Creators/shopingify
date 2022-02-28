import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart from "../../models/Cart";

interface CartType {
  name: string;
  cart: Cart[];
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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
