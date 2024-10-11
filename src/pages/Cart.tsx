import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCatProdcutsByItems } from "@store/Cart/cartSlice";
import { CartTotalPrice, CartItemList } from "@components/eCommerce";
import { cartItemChangeQuantity, cartRemoveItem } from "@store/Cart/cartSlice";

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
    dispatch(actGetCatProdcutsByItems());
  }, [dispatch]);

  return (
    <>
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeCartItem={removeCartItem}
            />
            <CartTotalPrice products={products} />
          </>
        ) : (
          "Your Cart Is Empty!"
        )}
      </Loading>
    </>
  );
}

export default Cart;
