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
  term: boolean;
  //   isLogin: boolean;
};

const initialState: AuthState = {
  token: null,
  term: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeAuthToken: (state) => {
      state.token = null;
    },
    setTerm: (state, action: PayloadAction<boolean>) => {
      state.term = action.payload;
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
export const selectTerm = (state: RootState) => state.auth.term;

export const { removeAuthToken, setTerm, setAuthToken } = authSlice.actions;
