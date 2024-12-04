import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCatProdcutsByItems,
  productsFullInfoCleanup,
} from "@store/Cart/cartSlice";
import { cartItemChangeQuantity, cartRemoveItem } from "@store/Cart/cartSlice";
import { cleanUpOrdersLoading } from "@store/orders/ordersSlice";

function useCart() {
  const dispatch = useAppDispatch();
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);
  const ordersLoadingStatus = useAppSelector((state) => state.orders.loading);

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeCartItem = useCallback(
    (id: number) => {
      dispatch(cartRemoveItem(id));
    },
    [dispatch]
  );

  const { items, loading, error, productsFullInfo } = useAppSelector(
    (state) => state.cart
  );

  const products = productsFullInfo.map((product) => ({
    ...product,
    quantity: items[product.id],
  }));

  useEffect(() => {
    const promise = dispatch(actGetCatProdcutsByItems());
    return () => {
      promise.abort();
      dispatch(productsFullInfoCleanup());
      dispatch(cleanUpOrdersLoading());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    products,
    changeQuantityHandler,
    userAccessToken,
    ordersLoadingStatus,
    removeCartItem,
  };
}

export default useCart;
