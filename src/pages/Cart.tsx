import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCatProdcutsByItems } from "@store/Cart/cartSlice";
import { CartSubtotal, CartItemList } from "@components/eCommerce";
import { cartItemChangeQuantity } from "@store/Cart/cartSlice";

import { Heading } from "@components/Common";
import { Loading } from "@components/feedback";

function Cart() {
  const dispatch = useAppDispatch();
  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
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
    dispatch(actGetCatProdcutsByItems());
  }, [dispatch]);

  return (
    <>
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
        <CartItemList
          products={products}
          changeQuantityHandler={changeQuantityHandler}
        />
        <CartSubtotal />
      </Loading>
    </>
  );
}

export default Cart;
