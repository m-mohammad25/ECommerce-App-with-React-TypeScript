import { useEffect, useState } from "react";

import { getCartTotalQuantitySelector } from "@store/Cart/cartSlice";
import { useAppSelector } from "@store/hooks";

import { useNavigate } from "react-router-dom";

import Logo from "../../../assets/cart.svg?react";
import styles from "./styles.module.css";

const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;

function HeaderBasket() {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

  const navigate = useNavigate();

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
    <div className={basketContainer} onClick={() => navigate("/cart")}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
}

export default HeaderBasket;
