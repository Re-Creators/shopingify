import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../../app/store";
import axiosClient from "../../axiosClient/index";
import User from "../../models/User";

interface State {
  isLoading: boolean;
  token: string | null;
  info: User | null;
  error: string | null;
}

type UserData = {
  username: string;
  password: string;
};

const initialState: State = {
  isLoading: false,
  token: null,
  info: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, { payload }: PayloadAction<User>) => {
      state.isLoading = false;
      state.error = null;
      state.info = payload;
    },
    fetchFailure: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    logout: (state) => {
      localStorage.clear();
      window.location.href =
        process.env.NODE_ENV === "development"
          ? "http://:localhost:8080/login"
          : "https://kataku-io.netlify.app/login";
    },
  },
});

export const { logout } = userSlice.actions;
const { fetchStart, fetchSuccess, fetchFailure } = userSlice.actions;

export const register =
  (userData: UserData): AppThunk =>
  async (dispatch: any) => {
    dispatch(fetchStart());
    try {
      const { data, status } = await axiosClient.post(
        "/users/signup",
        userData
      );

      if (status === 200) {
        localStorage.setItem("shopingify_token", data.token);
        dispatch(fetchSuccess(data.user));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(fetchFailure(error.response?.data.message));
      }
      console.log(error);
    }
  };

export const login =
  (userData: UserData): AppThunk =>
  async (dispatch: any) => {
    dispatch(fetchStart());
    try {
      const { data, status } = await axiosClient.post("/users/login", userData);

      if (status === 200) {
        localStorage.setItem("shopingify_token", data.token);
        dispatch(fetchSuccess(data.user));
      } else {
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(fetchFailure(error.response?.data.message));
      }
      console.log(error);
    }
  };

export const getUser = (): AppThunk => async (dispatch: any) => {
  dispatch(fetchStart());

  try {
    const { data } = await axiosClient.get("/users/me");
    dispatch(fetchSuccess(data.user));
  } catch (e) {
    dispatch(logout());
    console.log(e);
  }
};

export default userSlice.reducer;
