import { getCartTotalQuantity } from "@store/Cart/cartSlice";
import { useAppSelector } from "@store/hooks";
import Logo from "../../../assets/cart.svg?react";
import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

function HeaderBasket() {
  const totalQuantity = useAppSelector(getCartTotalQuantity);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
}

export default HeaderBasket;
