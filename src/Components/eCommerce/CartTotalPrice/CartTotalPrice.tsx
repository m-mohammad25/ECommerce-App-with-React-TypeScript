import { TProduct } from "@types";
import style from "./style.module.css";
import { Button } from "react-bootstrap";

type TCartTotalPriceProps = {
  products: TProduct[];
  userAccessToken: string | null;
};
function CartTotalPrice({ products, userAccessToken }: TCartTotalPriceProps) {
  const totalPrice = products.reduce((acc, product) => {
    if (product.quantity && typeof product.quantity === "number") {
      return acc + product.price * (product.quantity as number);
    } else {
      return acc;
    }
  }, 0);

  return (
    <>
      <div className={style.container}>
        <span>Subtotal:</span>
        <span>{totalPrice}$</span>
      </div>
      {userAccessToken && (
        <div className={style.container}>
          <span></span>
          <span>
            <Button variant="info" style={{ color: "white" }}>
              Place Order
            </Button>
          </span>
        </div>
      )}
    </>
  );
}

export default CartTotalPrice;
