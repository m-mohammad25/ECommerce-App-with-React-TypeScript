import { TProduct } from "@types";
import style from "./style.module.css";

type TCartTotalPriceProps = { products: TProduct[] };
function CartTotalPrice({ products }: TCartTotalPriceProps) {
  const totalPrice = products.reduce((acc, product) => {
    if (product.quantity && typeof product.quantity === "number") {
      return acc + product.price * (product.quantity as number);
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className={style.container}>
      <span>Subtotal:</span>
      <span>{totalPrice}$</span>
    </div>
  );
}

export default CartTotalPrice;
