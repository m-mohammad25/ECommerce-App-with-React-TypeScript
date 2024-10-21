import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils";

import axios from "axios";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const record = await axios.get(`wishlist?userId=1&itemId=${id}`);
      if (record.data.length > 0) {
        await axios.delete(`wishlist/${record.data[0].id}`); //id: auto generated id by jsonServer
        return { type: "remove", id };
      } else {
        await axios.post(`wishlist`, {
          itemId: id,
          userId: "1",
        });
        return { type: "add", id };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actLikeToggle;
