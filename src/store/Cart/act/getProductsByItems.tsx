import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@types";
import { RootState } from "@store";
import axios from "axios";
import { axiosErrorHandler } from "@utils";

type TResponse = TProduct[];

const actGetCatProdcutsByItems = createAsyncThunk(
  "cart/actGetCatProdcutsByItems",
  async (_, thunk) => {
    const { rejectWithValue, fulfillWithValue, getState, signal } = thunk;
    const { cart } = getState() as RootState;

    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) return fulfillWithValue([]); //return empty array with fullfilled case (to avoid fetching all items when itemsId is empty)

    try {
      const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      const response = await axios.get<TResponse>(
        `http://localhost:5005/products?${concatenatedItemsId}`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCatProdcutsByItems;
