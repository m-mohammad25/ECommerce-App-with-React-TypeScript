import HeaderCounter from "../HeaderCounter/HeaderCounter";
import styles from "./styles.module.css";
import { getCartTotalQuantitySelector } from "@store/Cart/cartSlice";
import { useAppSelector } from "@store/hooks";

import CartIcon from "@assets/cart.svg?react";
import WishlistIcon from "@assets/wishlist.svg?react";

const { headerRightBar } = styles;
function HeaderRightBar() {
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.items.length
  );
  return (
    <div className={headerRightBar}>
      <HeaderCounter
        totalQuantity={wishlistTotalQuantity}
        title="Wishlist"
        to="wishlist"
        svgIcon={<WishlistIcon title="WishlistIcon" />}
      />
      <HeaderCounter
        totalQuantity={cartTotalQuantity}
        title="Cart"
        to="cart"
        svgIcon={<CartIcon title="cartIcon" />}
      />
    </div>
  );
}

export default HeaderRightBar;
