import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { RootState } from "@store";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (total: number, thunk) => {
    const { rejectWithValue, getState } = thunk;
    const { auth, cart } = getState() as RootState;
    const orderedItems = cart.productsFullInfo.map((el) => ({
      id: el.id,
      title: el.title,
      price: el.price,
      img: el.img,
      quantity: cart.items[el.id],
    }));

    try {
      const response = await axios.post("/orders", {
        userId: auth.user?.id,
        total,
        items: orderedItems,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actPlaceOrder;
