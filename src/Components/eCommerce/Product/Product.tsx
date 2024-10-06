import { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToCart } from "@store/Cart/cartSlice";
import { TProduct } from "@customTypes/product";
import { Button, Spinner } from "react-bootstrap";

import styles from "./style.module.css";

const { product, productImg, maximumNotice } = styles;

const Product = memo(({ id, title, img, price, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();

  const availableQuantity = max - (quantity ?? 0);
  const isMaxQuantityReached = availableQuantity == 0;

  const [isBtnClicked, setIsBtnClicked] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  useEffect(() => {
    if (!isBtnClicked) return;
    setIsBtnDisabled(true);
    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isBtnClicked]);
  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnClicked((prev) => prev + 1);
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price.toFixed(2)} $</h3>
      <p className={maximumNotice}>
        {!isMaxQuantityReached
          ? `You can buy ${availableQuantity} item(s)`
          : "Max quantity reached"}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || isMaxQuantityReached}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...{" "}
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
