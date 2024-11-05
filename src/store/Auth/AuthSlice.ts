import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading } from "@types";
import { actAuthRegister } from "./act/actAuthRegister";

type TAuthState = {
  loading: TLoading;
  error: string | null;
};

const initialState: TAuthState = {
  loading: "idle",
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actAuthRegister.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.error = null;
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actAuthRegister };
export default authSlice.reducer;
