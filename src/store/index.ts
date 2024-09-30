import { configureStore } from "@reduxjs/toolkit";
import categories from "@store/categories/categoriesSlice";
import products from "@store/Products/productsSlice";

const store = configureStore({
  reducer: { categories, products },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
