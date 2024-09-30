import { createSlice } from "@reduxjs/toolkit";
import actGetCatProdcuts from "./act/actGetCatProdcuts";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";

interface ICategoryState {
  records: TProduct[]; //array of that object
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoryState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCatProdcuts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCatProdcuts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });

    builder.addCase(actGetCatProdcuts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default productsSlice.reducer;
export { actGetCatProdcuts };
