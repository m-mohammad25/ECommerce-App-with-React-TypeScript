import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import categories from "@store/categories/categoriesSlice";

const store = configureStore({
  reducer: { categories },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused

export default store;
