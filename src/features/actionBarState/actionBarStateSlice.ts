import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionState } from "../../types/enum";

interface ActionBarState {
  value: ActionState;
}

const initialState: ActionBarState = {
  value: ActionState.SHOPPING_LIST,
};

const actionBarStateSlice = createSlice({
  name: "actionBarState",
  initialState,
  reducers: {
    changeState: (state, action: PayloadAction<ActionState>) => {
      state.value = action.payload;
    },
  },
});

export const { changeState } = actionBarStateSlice.actions;
export default actionBarStateSlice.reducer;
