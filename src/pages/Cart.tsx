import useCart from "@hooks/useCart";
import { Heading } from "@components/Common";
import { Loading } from "@components/feedback";
import { CartTotalPrice, CartItemList } from "@components/eCommerce";

function Cart() {
  const { loading, error, products, changeQuantityHandler, removeCartItem } =
    useCart();
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
