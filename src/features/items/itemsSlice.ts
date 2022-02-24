import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import Item from "../../models/Item";
import axiosClient from "../../axiosClient";

export const a = 0;

interface ItemSliceState {
  items: Item[];
  isLoading: boolean;
}

function startLoading(state: ItemSliceState) {
  state.isLoading = false;
}

const initialState: ItemSliceState = {
  items: [],
  isLoading: false,
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    fetchItemStart: startLoading,
    fetchItemSuccess: (state, { payload }: PayloadAction<Item[]>) => {
      state.items = payload;
      state.isLoading = false;
    },
  },
});

export const { fetchItemStart, fetchItemSuccess } = itemSlice.actions;

export const fetchItems = (): AppThunk => async (dispatch) => {
  dispatch(fetchItemStart());

  try {
    const response = await axiosClient.get("/products");

    console.log(response.data);
    dispatch(fetchItemSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
};

export default itemSlice.reducer;
