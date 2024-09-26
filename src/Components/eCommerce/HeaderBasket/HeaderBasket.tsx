import styles from "./styles.module.css";
import Logo from "../../../assets/cart.svg?react";
const { basketContainer, basketQuantity } = styles;

function HeaderBasket() {
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>0</div>
    </div>
  );
}

export default HeaderBasket;
