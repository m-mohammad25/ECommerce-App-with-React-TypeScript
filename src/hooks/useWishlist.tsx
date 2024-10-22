import { useEffect } from "react";
import {
  actGetWishlistItems,
  productsFullInfoCleanup,
} from "@store/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

function useWishlist() {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  const records = productsFullInfo.map((record) => ({
    ...record,
    quantity: cartItems[record.id],
    isLiked: true,
  }));

  useEffect(() => {
    const promise = dispatch(actGetWishlistItems());
    return () => {
      promise.abort();
      dispatch(productsFullInfoCleanup());
    };
  }, [dispatch]);
  return { loading, error, records };
}

export default useWishlist;
