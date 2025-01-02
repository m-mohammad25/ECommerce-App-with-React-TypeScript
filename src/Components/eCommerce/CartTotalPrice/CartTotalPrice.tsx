import { useState } from "react";

import { useAppDispatch } from "@store/hooks";
import { clearCartAfterPlaceOrder } from "@store/Cart/cartSlice";
import { actPlaceOrder } from "@store/orders/ordersSlice";

import { TProduct } from "@types";
import style from "./style.module.css";
import { Button, Modal, Spinner } from "react-bootstrap";

type TCartTotalPriceProps = {
  products: TProduct[];
  userAccessToken: string | null;
};
function CartTotalPrice({ products, userAccessToken }: TCartTotalPriceProps) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const totalPrice = products.reduce((acc, product) => {
    if (product.quantity && typeof product.quantity === "number") {
      return acc + product.price * (product.quantity as number);
    } else {
      return acc;
    }
  }, 0);

  const modalHandler = () => {
    setShowModal(!showModal);
    setError(null);
  };

  const placeOrderHandler = () => {
    setLoading(true);
    dispatch(actPlaceOrder(totalPrice))
      .unwrap()
      .then(() => {
        dispatch(clearCartAfterPlaceOrder());
        setShowModal(false);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Modal show={showModal} onHide={modalHandler} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Placing Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to place order with Subtotal:{" "}
          {totalPrice.toFixed(2)}$
          {!loading && error && (
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalHandler}>
            Close
          </Button>
          <Button
            variant="info"
            style={{ color: "white" }}
            onClick={placeOrderHandler}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading...
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={style.container}>
        <span>Subtotal:</span>
        <span>{totalPrice}$</span>
      </div>
      {userAccessToken && (
        <div className={style.container}>
          <span></span>
          <span>
            <Button
              variant="info"
              style={{ color: "white" }}
              onClick={modalHandler}
            >
              Place Order
            </Button>
          </span>
        </div>
      )}
    </>
  );
}

export default CartTotalPrice;
