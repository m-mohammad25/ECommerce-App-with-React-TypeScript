import { Form, Button } from "react-bootstrap";
import style from "./style.module.css";
import { TProduct } from "@customTypes/product";
import { memo } from "react";

const { cartItem, product, productImg, productInfo, cartItemSelection } = style;
type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
};

const CartItem = memo(
  ({
    id,
    title,
    price,
    img,
    max,
    quantity,
    changeQuantityHandler,
  }: CartItemProps) => {
    console.log("fire!");

    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = idx++;
        return <option key={quantity}>{quantity}</option>;
      });

    const changeQuality = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedQuantity = +event.target.value;
      changeQuantityHandler(id, selectedQuantity);
    };
    return (
      <div className={cartItem}>
        <div className={product}>
          <div className={productImg}>
            <img src={img} alt={title} />
          </div>
          <div className={productInfo}>
            <h2>{title}</h2>
            <h3>{price} $</h3>
            <Button
              variant="secondary"
              style={{ color: "white", width: "100px" }}
              className="mt-auto"
            >
              Remove
            </Button>
          </div>
        </div>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select
            aria-label="Default select example"
            value={quantity}
            onChange={changeQuality}
          >
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
