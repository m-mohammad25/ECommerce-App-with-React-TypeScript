import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TOrderItem } from "@types";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrders from "./act/actGetOrders";

interface IOrdersState {
  loading: TLoading;
  error: string | null;
  orderList: TOrderItem[];
}
const initialState: IOrdersState = {
  orderList: [],
  loading: "idle",
  error: null,
};
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    cleanUpOrdersLoading: (state) => {
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    // PlaceOrder
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // GetOrder
    builder.addCase(actGetOrders.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetOrders.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.error = null;
      state.orderList = action.payload;
    });
    builder.addCase(actGetOrders.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export const { cleanUpOrdersLoading } = ordersSlice.actions;
export { actPlaceOrder, actGetOrders };
export default ordersSlice.reducer;
