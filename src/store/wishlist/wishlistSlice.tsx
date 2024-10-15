import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
interface IWishListState {
  items: number[];
  error: null | string;
}
const initialState: IWishListState = {
  items: [],
  error: null,
};
const whishListSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      state.error = null;
      if (action.payload.type === "add") {
        state.items.push(action.payload.id);
      } else {
        state.items = state.items.filter((item) => item !== action.payload.id);
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export default whishListSlice.reducer;
export { actLikeToggle };
