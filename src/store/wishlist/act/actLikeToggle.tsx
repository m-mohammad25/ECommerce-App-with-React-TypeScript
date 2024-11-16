import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store";
import { axiosErrorHandler } from "@utils";

import axios from "axios";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (itemId: number, thunk) => {
    const { rejectWithValue, getState } = thunk;
    const { auth } = getState() as RootState;
    try {
      const record = await axios.get(
        `wishlist?userId=${auth.user?.id}&itemId=${itemId}`
      );
      if (record.data.length > 0) {
        await axios.delete(`wishlist/${record.data[0].id}`); //id: auto generated id by jsonServer
        return { type: "remove", itemId };
      } else {
        await axios.post(`wishlist`, {
          itemId: itemId,
          userId: auth.user?.id,
        });
        return { type: "add", itemId };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actLikeToggle;
