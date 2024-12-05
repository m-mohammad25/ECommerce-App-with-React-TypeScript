import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetOrders, cleanUpOrdersLoading } from "@store/orders/ordersSlice";
import { TProduct } from "@types";

function useOrders() {
  const dispatch = useAppDispatch();
  const { loading, error, orderList } = useAppSelector((state) => state.orders);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProducts] = useState<TProduct[]>([]);

  const viewProductsDetails = (id: number) => {
    const order = orderList.find((order) => order.id === id);
    const products = order?.items || [];
    setSelectedProducts(products);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setSelectedProducts([]);
  };

  useEffect(() => {
    const promise = dispatch(actGetOrders());
    return () => {
      promise.abort();
      dispatch(cleanUpOrdersLoading());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    showModal,
    orderList,
    selectedProduct,
    viewProductsDetails,
    closeModalHandler,
  };
}

export default useOrders;
