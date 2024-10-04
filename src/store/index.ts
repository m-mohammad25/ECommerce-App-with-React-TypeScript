import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "@store/categories/categoriesSlice";
import products from "@store/Products/productsSlice";
import cart from "@store/Cart/cartSlice";

const persistConfig = {
  key: "root", //id for this configs
  storage,
  whiteList: ["cart"], //presist this state
};

const rootReducer = combineReducers({ categories, products, cart });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
