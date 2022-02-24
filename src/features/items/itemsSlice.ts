import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import Item from "../../models/Item";
import axiosClient from "../../axiosClient";

export const a = 0;

interface ItemsSliceState {
  items: Item[];
  isLoading: boolean;
}

function startLoading(state: ItemsSliceState) {
  state.isLoading = false;
}

const initialState: ItemsSliceState = {
  items: [],
  isLoading: false,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    fetchItemsStart: startLoading,
    fetchItemsSuccess: (state, { payload }: PayloadAction<Item[]>) => {
      state.items = payload;
      state.isLoading = false;
    },
  },
});

export const { fetchItemsStart, fetchItemsSuccess } = itemsSlice.actions;

export const fetchItems = (): AppThunk => async (dispatch) => {
  dispatch(fetchItemsStart());

  try {
    const response = await axiosClient.get("/products");

    console.log(response.data);
    dispatch(fetchItemsSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
};

export default itemsSlice.reducer;
