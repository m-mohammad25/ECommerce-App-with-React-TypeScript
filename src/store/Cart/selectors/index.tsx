import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store/index";

const getCartTotalQuantitySelector = createSelector(
  //optimized version (like useCallback()) from the below func
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (total, item) => total + item,
      0
    );
    return totalQuantity;
  }
);

// const getCartTotalQuantity = (state) => {
//   const totalQuantity = Object.values(state.cart.items).reduce(
//     (total, item) => total + item,
//     0
//   );
//   return totalQuantity;
// };

export { getCartTotalQuantitySelector };
