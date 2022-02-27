import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import Item from "../../models/Item";
import axiosClient from "../../axiosClient";
import Items from "../../models/Items";

export const a = 0;

interface ItemsSliceState {
  items: Items[];
  isLoading: boolean;
}

interface ItemsResponse {
  name: string;
  _id: string;
  items: Item[];
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
    fetchItemsSuccess: (state, { payload }: PayloadAction<Items[]>) => {
      state.items = payload;
      state.isLoading = false;
    },
  },
});

export const { fetchItemsStart, fetchItemsSuccess } = itemsSlice.actions;

export const fetchItems = (): AppThunk => async (dispatch) => {
  dispatch(fetchItemsStart());

  try {
    const { data } = await axiosClient.get("/items");
    dispatch(fetchItemsSuccess(data));
  } catch (e) {
    console.log(e);
  }
};

export default itemsSlice.reducer;
