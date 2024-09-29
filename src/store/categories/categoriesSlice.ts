import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCatigories";
interface ICategoryState {
  records: { id: number; title: string; prefix: string; img: string }[]; //array of that object
  loading: "idle" | "succeeded" | "pending" | "failed";
  error: string | null;
}

const initialState: ICategoryState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlicer = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });

    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default categoriesSlicer.reducer;
export { actGetCategories };
