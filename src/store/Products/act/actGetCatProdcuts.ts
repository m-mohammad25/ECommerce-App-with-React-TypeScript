import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils";

import axios from "axios";

type TResponse = TProduct[];
const actGetCatProdcuts = createAsyncThunk(
  "producs/actGetCatProdcuts",
  async (cat_prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `products?cat_prefix=${cat_prefix}`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCatProdcuts;
