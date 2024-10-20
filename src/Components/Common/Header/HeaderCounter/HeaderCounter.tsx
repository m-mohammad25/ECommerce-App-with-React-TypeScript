import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const { container, totalNum, pumpAnimate, iconWrapper } = styles;
type THeaderCounterProps = {
  totalQuantity: number;
  title: string;
  to: string;
  svgIcon: React.ReactElement;
};
function HeaderCounter({
  totalQuantity,
  title,
  to,
  svgIcon,
}: THeaderCounterProps) {
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
    <div className={container} onClick={() => navigate(to)}>
      <div className={iconWrapper}>
        {svgIcon}
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default HeaderCounter;
