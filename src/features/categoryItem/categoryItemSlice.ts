import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import Item from "../../models/Item";
import axiosClient from "../../axiosClient";
import CategoryItem from "../../models/CategoryItem";

export const a = 0;

interface CategoryItemSlice {
  categoryItem: CategoryItem[];
  selectedItem: Item | null;
  isLoading: boolean;
}

function startLoading(state: CategoryItemSlice) {
  state.isLoading = false;
}

const initialState: CategoryItemSlice = {
  categoryItem: [],
  selectedItem: null,
  isLoading: false,
};

export const categoryItemSlice = createSlice({
  name: "categoryItem",
  initialState,
  reducers: {
    fetchCategoryStart: startLoading,
    fetchCategorySuccess: (
      state,
      { payload }: PayloadAction<CategoryItem[]>
    ) => {
      state.categoryItem = payload;
      state.isLoading = false;
    },
    setSelectedItem: (state, { payload }: PayloadAction<Item>) => {
      state.selectedItem = payload;
    },
  },
});

export const { fetchCategoryStart, fetchCategorySuccess, setSelectedItem } =
  categoryItemSlice.actions;

export const fetchCategoryItems = (): AppThunk => async (dispatch) => {
  dispatch(fetchCategoryStart());

  try {
    const { data } = await axiosClient.get("/items");
    dispatch(fetchCategorySuccess(data));
  } catch (e) {
    console.log(e);
  }
};

export default categoryItemSlice.reducer;
