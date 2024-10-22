import { createSlice } from "@reduxjs/toolkit";
import { getCartTotalQuantitySelector } from "@store/Cart/selectors";
import actGetCatProdcutsByItems from "@store/Cart/act/getProductsByItems";
import { TProduct, TLoading } from "@types";

interface ICartState {
  items: { [key: string]: number };
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    productsFullInfoCleanup: (state) => {
      state.productsFullInfo = [];
    },
    addToCart: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    cartRemoveItem: (state, action) => {
      delete state.items[action.payload];
      state.productsFullInfo = state.productsFullInfo.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCatProdcutsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCatProdcutsByItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.error = null;
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetCatProdcutsByItems.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { getCartTotalQuantitySelector, actGetCatProdcutsByItems };
export const {
  addToCart,
  cartItemChangeQuantity,
  cartRemoveItem,
  productsFullInfoCleanup,
} = cartSlice.actions;
export default cartSlice.reducer;
