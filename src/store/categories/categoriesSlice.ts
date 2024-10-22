import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCatigories";
import { TLoading, TCategory, isString } from "@types";

interface ICategoryState {
  records: TCategory[]; //array of that object
  loading: TLoading;
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
  reducers: {
    cleanUpCategoriesRecords: function (state) {
      state.records = [];
    },
  },
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
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export default categoriesSlicer.reducer;
export const { cleanUpCategoriesRecords } = categoriesSlicer.actions;
export { actGetCategories };
