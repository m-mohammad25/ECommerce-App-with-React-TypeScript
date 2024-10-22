import { TProduct } from "@types";
import CartItem from "../CartItem/CartItem";

type CartItemListProps = {
  products: TProduct[];
} & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
};
function CartItemsList({
  products,
  changeQuantityHandler,
  removeCartItem,
}: CartItemListProps) {
  const cartItems = products.map((product) => (
    <CartItem
      key={product.id}
      {...product}
      changeQuantityHandler={changeQuantityHandler}
      removeCartItem={removeCartItem}
    />
  ));
  return <div>{cartItems}</div>;
}

export default CartItemsList;
