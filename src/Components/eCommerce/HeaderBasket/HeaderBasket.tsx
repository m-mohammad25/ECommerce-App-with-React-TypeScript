import { getCartTotalQuantitySelector } from "@store/Cart/cartSlice";
import { useAppSelector } from "@store/hooks";
import Logo from "../../../assets/cart.svg?react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
const { basketContainer, basketQuantity, pumpCartQuantity } = styles;

function HeaderBasket() {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;
  useEffect(() => {
    if (!totalQuantity) return;
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={quantityStyle}>{totalQuantity}</div>
    </div>
  );
}

export default HeaderBasket;
