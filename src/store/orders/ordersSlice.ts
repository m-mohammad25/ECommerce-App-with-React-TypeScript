import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TOrderItem } from "@types";
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
});

export default ordersSlice.reducer;
