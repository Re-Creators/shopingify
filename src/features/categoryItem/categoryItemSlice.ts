import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import Item from "../../models/Item";
import axiosClient from "../../axiosClient";
import CategoryItem from "../../models/CategoryItem";

interface CategoryItemSlice {
  categoryItem: CategoryItem[];
  selectedItem: Item | null;
  isLoading: boolean;
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
    fetchCategoryStart: (state) => {
      state.isLoading = true;
    },
    fetchCategorySuccess: (
      state,
      { payload }: PayloadAction<CategoryItem[]>
    ) => {
      state.categoryItem = payload.filter(
        (category) => category.items.length > 0
      );
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

export const searchCategoryItems =
  (name: string): AppThunk =>
  async (dispatch) => {
    dispatch(fetchCategoryStart());

    try {
      const { data } = await axiosClient.get("/items/search?name=" + name);
      dispatch(fetchCategorySuccess(data));
    } catch (e) {
      console.log(e);
    }
  };

export default categoryItemSlice.reducer;
