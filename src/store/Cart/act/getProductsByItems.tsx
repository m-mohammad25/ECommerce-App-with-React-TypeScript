import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";
import { RootState } from "@store/index";
import axios from "axios";

type TResponse = TProduct[];

const actGetCatProdcutsByItems = createAsyncThunk(
  "cart/actGetCatProdcutsByItems",
  async (_, thunk) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunk;
    const { cart } = getState() as RootState;

    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) return fulfillWithValue([]); //return empty array with fullfilled case (to avoid fetching all items when itemsId is empty)

    try {
      const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      const response = await axios.get<TResponse>(
        `http://localhost:5005/products?${concatenatedItemsId}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.response);
      } else {
        return rejectWithValue("unexpected error");
      }
    }
  }
);

export default actGetCatProdcutsByItems;
