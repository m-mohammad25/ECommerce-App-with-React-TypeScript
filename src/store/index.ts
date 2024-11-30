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
import orders from "@store/orders/ordersSlice";

const rootPersistConfig = {
  key: "root", //id for this configs
  storage,
  whiteList: ["cart", "auth"], //presist this state
};

const cartPersistConfig = {
  key: "cart", //id for this configs
  storage,
  whiteList: ["items"], //presist this state
};

const authPersistConfig = {
  key: "auth", //id for this configs
  storage,
  whiteList: ["user, accessToken"], //presist this state
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories,
  products,
  orders,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist,
});

const presistedReducer = persistReducer(rootPersistConfig, rootReducer); //presist the root state

const store = configureStore({
  reducer: presistedReducer,
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
