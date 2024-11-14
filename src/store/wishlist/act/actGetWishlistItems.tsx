import { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils";
import { RootState } from "@store";

import axios from "axios";

type TResponse = TProduct[];
type TWishlistEntry = {
  itemId: number;
  userId: string;
  id: number;
};
type TDataType = "items" | "productsFullInfo" | "empty";
const actGetWishlistItems = createAsyncThunk(
  "wishlist/actGetWishlistItems",
  async (dataType: TDataType, thunkAPI) => {
    const { rejectWithValue, signal, getState } = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      const response = await axios.get<TWishlistEntry[]>(
        `wishlist?userId=${auth.user?.id}`,
        {
          signal,
        }
      ); //it's enough to abort the first request only

      if (response.data.length === 0) return { data: [], dataType: "empty" };

      if (dataType === "items") {
        const ItemsId = response.data.map((el) => el.itemId);

        return { data: ItemsId, dataType: "items" };
      } else if (dataType === "productsFullInfo") {
        const concatenatedItemsId = response.data
          .map((el) => `id=${el.itemId}`)
          .join("&");

        const productsInfo = await axios.get<TResponse>(
          `products?${concatenatedItemsId}`
        );
        return { data: productsInfo.data, dataType: "ProductsFullInfo" };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlistItems;
