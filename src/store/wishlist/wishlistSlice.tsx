import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlistItems from "./act/actGetWishlistItems";
import { isString, TLoading, TProduct } from "@types";
import { logOut } from "@store/Auth/AuthSlice";

interface IWishListState {
  items: number[];
  error: null | string;
  loading: TLoading;
  productsFullInfo: TProduct[];
}
const initialState: IWishListState = {
  items: [],
  productsFullInfo: [],
  loading: "idle",
  error: null,
};
const whishListSlice = createSlice({
  name: "whishlist",
  initialState,
  reducers: {
    productsFullInfoCleanup: (state) => {
      state.productsFullInfo = [];
    },
  },
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
        state.productsFullInfo = state.productsFullInfo.filter(
          (product) => product.id !== action.payload.id
        );
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // get wishlist full information
    builder.addCase(actGetWishlistItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetWishlistItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.error = null;
      if (action.payload?.dataType === "items") {
        state.items = action.payload.data as number[];
      } else if (action.payload?.dataType === "ProductsFullInfo") {
        state.productsFullInfo = action.payload.data as TProduct[];
      }
    });
    builder.addCase(actGetWishlistItems.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    builder.addCase(logOut, (state) => {
      state.items = [];
      state.productsFullInfo = [];
    });
  },
});

export default whishListSlice.reducer;
export const { productsFullInfoCleanup } = whishListSlice.actions;
export { actLikeToggle, actGetWishlistItems };
