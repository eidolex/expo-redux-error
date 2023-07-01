import {
  PayloadAction,
  createReducer,
  createSlice,
  isFulfilled,
} from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import { RootState } from "./store";

export type AuthState = {
  token: string | null;
  //   isLogin: boolean;
};

const inititalState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: inititalState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeAuthToken: (state) => {
      state.token = null;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
      }
    );
  },
});

export const selectAuthToken = (state: RootState) => state.auth.token;

export const { removeAuthToken } = authSlice.actions;
