import { memo, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { TProduct } from "@types";
import { Modal, Spinner } from "react-bootstrap";
import Like from "@assets/like.svg?react";
import LikeFill from "@assets/like-fill.svg?react";

import styles from "./styles.module.css";
import ProductInfo from "../ProductInfo/ProductInfo";
import AddToCartBtn from "./AddToCartBtn/AddToCartBtn";

const { maximumNotice, whishlistBtn } = styles;

const Product = memo(
  ({
    id,
    title,
    img,
    price,
    max,
    quantity,
    isLiked,
    isAuthenticated,
  }: TProduct) => {
    const dispatch = useAppDispatch();
    const availableQuantity = max - (quantity ?? 0);
    const isMaxQuantityReached = availableQuantity == 0;

    const [showModal, setShowModal] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const LikeToggleHandler = (id: number) => {
      if (!isAuthenticated) {
        setShowModal(true);
        return;
      }

      if (isLoading) return;
      setIsLoading(true);

      dispatch(actLikeToggle(id))
        .unwrap()
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    };

    return (
      <>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Login Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You need to login first to add this item to your wishlist.
          </Modal.Body>
        </Modal>

        <ProductInfo title={title} img={img} price={price}>
          <div className={whishlistBtn} onClick={() => LikeToggleHandler(id)}>
            {isLoading ? (
              <Spinner size="sm" variant="primary" animation="border" />
            ) : isLiked ? (
              <LikeFill />
            ) : (
              <Like />
            )}
          </div>

          <p className={maximumNotice}>
            {!isMaxQuantityReached
              ? `You can buy ${availableQuantity} item(s)`
              : "Max quantity reached"}
          </p>

          <AddToCartBtn productId={id} isDisabled={isMaxQuantityReached} />
        </ProductInfo>
      </>
    );
  }
);

export default Product;
