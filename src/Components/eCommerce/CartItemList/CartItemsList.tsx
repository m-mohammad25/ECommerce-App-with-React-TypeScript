import { TProduct } from "@customTypes/product";
import CartItem from "../CartItem/CartItem";

type CartItemListProps = {
  products: TProduct[];
} & {
  changeQuantityHandler: (id: number, quantity: number) => void;
};
function CartItemsList({ products, changeQuantityHandler }: CartItemListProps) {
  const cartItems = products.map((product) => (
    <CartItem
      key={product.id}
      {...product}
      changeQuantityHandler={changeQuantityHandler}
    />
  ));
  return <div>{cartItems}</div>;
}

export default CartItemsList;
