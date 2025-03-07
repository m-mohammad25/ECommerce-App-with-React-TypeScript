import { createSlice } from "@reduxjs/toolkit";
import actGetCatProdcuts from "./act/actGetCatProdcuts";
import { isString, TLoading, TProduct } from "@types";

interface IProductState {
  records: TProduct[]; //array of that object
  loading: TLoading;
  error: string | null;
}

const initialState: IProductState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCatProdcuts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCatProdcuts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.error = null;
      state.records = action.payload;
    });

    builder.addCase(actGetCatProdcuts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export default productsSlice.reducer;
export const { productsCleanUp } = productsSlice.actions;
export { actGetCatProdcuts };
