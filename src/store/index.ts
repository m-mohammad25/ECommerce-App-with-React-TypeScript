import { configureStore } from "@reduxjs/toolkit";
import categories from "@store/categories/categoriesSlice";

const store = configureStore({
  reducer: { categories },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
