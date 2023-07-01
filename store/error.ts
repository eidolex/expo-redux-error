import { AnyAction, AsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import { RootState } from "./store";

export type ErrorState = {
  error: Error | null;
};

const initialState = {
  error: null,
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;

function isPendingAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith("/rejected");
}

export const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(isPendingAction, (state, action) => {
      if (
        typeof action.payload == "object" &&
        action.payload &&
        "status" in action.payload &&
        action.payload.status == 422
      ) {
        console.log("here");
        // @ts-ignore
        state.error = action.payload.data;
      }
    });
  },
});

export const selectHasError = (state: RootState) => state.error.error !== null;
