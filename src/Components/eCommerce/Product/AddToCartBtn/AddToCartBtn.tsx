import { useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { Button, Spinner } from "react-bootstrap";
import { addToCart } from "@store/Cart/cartSlice";

// import "./style.css";
type TAddToCArtBtnProps = {
  productId: number;
  isDisabled?: boolean;
  style?: React.CSSProperties;
};

const defaultStyle = {
  color: "white",
};

function AddToCartBtn({
  productId,
  isDisabled = false,
  style = defaultStyle,
}: TAddToCArtBtnProps) {
  const dispatch = useAppDispatch();
  const [isBtnClicked, setIsBtnClicked] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const addToCartHandler = (productId: number) => {
    dispatch(addToCart(productId));
    setIsBtnClicked((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isBtnClicked) return;
    setIsBtnDisabled(true);
    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isBtnClicked]);

  return (
    <Button
      style={style}
      variant="info"
      onClick={() => addToCartHandler(productId)}
      disabled={isBtnDisabled || isDisabled}
    >
      {isBtnDisabled ? (
        <>
          <Spinner animation="border" size="sm" /> Loading...{" "}
        </>
      ) : (
        "Add to cart"
      )}
    </Button>
  );
}

export default AddToCartBtn;
