import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { RootState } from "@store";
import { TOrderItem } from "@types";

type TResponse = TOrderItem[];
const actGetOrders = createAsyncThunk(
  "orders/actGetOrders",
  async (_, thunk) => {
    const { rejectWithValue, getState, signal } = thunk;
    const { auth } = getState() as RootState;

    try {
      const response = await axios.get<TResponse>(
        `/orders?userId=${auth.user?.id}`,
        {
          signal,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetOrders;
