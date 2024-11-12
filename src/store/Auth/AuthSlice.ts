import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading } from "@types";
import { actAuthRegister } from "./act/actAuthRegister";
import { actAuthLogin } from "./act/actAuthLogin";

type TAuthState = {
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  } | null;
  accessToken: string | null;
  loading: TLoading;
  error: string | null;
};

const initialState: TAuthState = {
  loading: "idle",
  error: null,
  user: null,
  accessToken: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUI: (state) => {
      (state.error = null), (state.loading = "idle");
    },
    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    //register
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

    //login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.error = null;
      state.loading = "succeeded";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actAuthRegister, actAuthLogin };
export const { resetUI, logOut } = authSlice.actions;
export default authSlice.reducer;
