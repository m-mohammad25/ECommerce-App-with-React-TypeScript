import useCart from "@hooks/useCart";
import { Heading } from "@components/Common";
import { Loading, LottieHandler } from "@components/feedback";
import { CartTotalPrice, CartItemList } from "@components/eCommerce";

function Cart() {
  const {
    loading,
    error,
    products,
    changeQuantityHandler,
    removeCartItem,
    ordersLoadingStatus,
    userAccessToken,
  } = useCart();
  return (
    <>
      <Heading title="Cart" />
      <Loading status={loading} error={error} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeCartItem={removeCartItem}
            />
            <CartTotalPrice
              products={products}
              userAccessToken={userAccessToken}
            />
          </>
        ) : ordersLoadingStatus === "succeeded" ? (
          <LottieHandler
            type="success"
            message="Your order has been placed successfully!"
          />
        ) : (
          <LottieHandler type="emptyCart" message="Your cart is empty" />
        )}
      </Loading>
    </>
  );
}

export default Cart;
