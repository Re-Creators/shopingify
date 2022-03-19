import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { ShoppingListDetail } from "../../models/ShoppingListDetail";
import axiosClient from "../../axiosClient/index";

interface Stats {
  list: ShoppingListDetail[];
  loading: boolean;
}

const initialState: Stats = {
  list: [],
  loading: false,
};

export const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, { payload }: PayloadAction<ShoppingListDetail[]>) => {
      state.list = payload;
      state.loading = false;
    },
  },
});

export const { fetchStart, fetchSuccess } = statisticSlice.actions;

export const fetchStats = (): AppThunk => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const { data } = await axiosClient.get("/shopping/getAll");
    dispatch(fetchSuccess(data));
  } catch (e) {
    console.error(e);
  }
};

export default statisticSlice.reducer;
