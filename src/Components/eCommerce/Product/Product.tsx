import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/Cart/cartSlice";
import { TProduct } from "@customTypes/product";
import { Button } from "react-bootstrap";
import styles from "./style.module.css";

const { product, productImg } = styles;

const Product = ({ id, title, img, price }: TProduct) => {
  const dispatch = useAppDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(id));
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
