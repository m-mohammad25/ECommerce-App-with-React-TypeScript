import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "@store/categories/categoriesSlice";
import products from "@store/Products/productsSlice";
import cart from "@store/Cart/cartSlice";
import wishlist from "@store/wishlist/wishlistSlice";
import auth from "@store/Auth/AuthSlice";

const cartPersistConfig = {
  key: "cart", //id for this configs
  storage,
  whiteList: ["items"], //presist this state
};

const wishlistPersistConfig = {
  key: "wishlist", //id for this configs
  storage,
  whiteList: ["items"], //presist this state
};

const rootReducer = combineReducers({
  auth,
  categories,
  products,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist: persistReducer(wishlistPersistConfig, wishlist),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
