import { Form, Button } from "react-bootstrap";
import style from "./style.module.css";
import { TProduct } from "@types";
import { memo } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";

const { cartItem, cartItemSelection } = style;
type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
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
    removeCartItem,
  }: CartItemProps) => {
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
        <ProductInfo title={title} img={img} price={price} direction="column">
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            className="mt-auto"
            onClick={() => removeCartItem(id)}
          >
            Remove
          </Button>
        </ProductInfo>

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
