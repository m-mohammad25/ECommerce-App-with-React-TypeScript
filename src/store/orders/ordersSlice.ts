import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TOrderItem } from "@types";
import actPlaceOrder from "./act/actPlaceOrder";
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "idle";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export { actPlaceOrder };
export default ordersSlice.reducer;
