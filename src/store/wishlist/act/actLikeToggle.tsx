import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, thunk) => {
    console.log(id);

    const { rejectWithValue } = thunk;
    try {
      const record = await axios.get(`wishlist?userId=1&itemId=${id}`);
      console.log(record);
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
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected Error!");
      }
    }
  }
);

export default actLikeToggle;
