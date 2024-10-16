import { useEffect } from "react";
import {
  actGetWishlistItems,
  productsFullInfoCleanup,
} from "@store/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import { Heading } from "@components/Common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import GridList from "@components/Common/GridList/GridList";

function Wishlist() {
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
    dispatch(actGetWishlistItems());
    return () => {
      dispatch(productsFullInfoCleanup());
    };
  }, [dispatch]);
  return (
    <>
      <Heading>Your Wishlist</Heading>
      <Loading status={loading} error={error}>
        <>
          {records.length > 0 ? (
            <GridList
              records={records}
              renderItem={(record) => <Product {...record} />}
            />
          ) : (
            "Your wishlist is empty"
          )}
        </>
      </Loading>
    </>
  );
}

export default Wishlist;
