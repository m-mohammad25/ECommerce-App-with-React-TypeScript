import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCatProdcutsByItems } from "@store/Cart/cartSlice";

import { Heading } from "@components/Common";
import { CartItem, CartSubtotal } from "@components/eCommerce";

function Cart() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(actGetCatProdcutsByItems());
  }, [dispatch]);

  return (
    <>
      <Heading>Cart</Heading>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartSubtotal />
    </>
  );
}

export default Cart;
