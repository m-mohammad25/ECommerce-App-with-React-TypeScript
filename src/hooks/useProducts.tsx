import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCatProdcuts,
  productsCleanUp,
} from "@store/Products/productsSlice";
import { useParams } from "react-router-dom";

function useProducts() {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const productFullInfo = records.map((record) => ({
    ...record,
    quantity: cartItems[record.id],
    isLiked: wishlistItems.includes(record.id),
  }));

  useEffect(() => {
    const promise = dispatch(actGetCatProdcuts(prefix as string));

    return () => {
      promise.abort();
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return {
    loading,
    error,
    productFullInfo,
    prefix: prefix?.toLocaleUpperCase(),
  };
}

export default useProducts;
