import { useEffect, useState } from "react";

// import { useAppSelector } from "@store/hooks";

import { useNavigate } from "react-router-dom";

import Logo from "../../../assets/wishlist.svg?react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";

const { container, totalNum, pumpAnimate, iconWrapper } = styles;

function HeaderWishlist() {
  const totalQuantity = useAppSelector((state) => state.wishlist.items.length);
  const navigate = useNavigate();

  const [isAnimate, setIsAnimate] = useState(false);
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;
  useEffect(() => {
    if (!totalQuantity) return;
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={container} onClick={() => navigate("/wishlist")}>
      <div className={iconWrapper}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Wishlist</h3>
    </div>
  );
}

export default HeaderWishlist;
