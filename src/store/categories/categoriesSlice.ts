import { createSlice } from "@reduxjs/toolkit";

interface ICategoryState {
  records: { id: number; title: string; prefix: string; img: string }[]; //array of that object
  loading: "idle" | "success" | "pending" | "failed";
  error: string | null;
}

const initialState: ICategoryState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlicer = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriesSlicer.reducer;
