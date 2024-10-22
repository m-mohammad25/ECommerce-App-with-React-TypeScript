import { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils";

import axios from "axios";

type TResponse = TProduct[];
type TWishlistEntry = {
  itemId: number;
  userId: string;
  id: number;
};

const actGetWishlistItems = createAsyncThunk(
  "wishlist/actGetWishlistItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TWishlistEntry[]>(`wishlist?userId=1`, {
        signal,
      }); //it's enough to abort the first request only

      if (response.data.length === 0) return fulfillWithValue([]);

      const concatenatedItemsId = response.data
        .map((el) => `id=${el.itemId}`)
        .join("&");

      const productsInfo = await axios.get<TResponse>(
        `products?${concatenatedItemsId}`
      );
      return productsInfo.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlistItems;
