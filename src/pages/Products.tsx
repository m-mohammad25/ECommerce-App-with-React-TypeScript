import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCatProdcuts,
  productsCleanUp,
} from "@store/Products/productsSlice";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import GridList from "@components/Common/GridList/GridList";
import { Heading } from "@components/Common";

const Products = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const productFullInfo = records.map((record) => ({
    ...record,
    quantity: cartItems[record.id],
  }));

  useEffect(() => {
    dispatch(actGetCatProdcuts(prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <Container>
      <Heading>{prefix?.toLocaleUpperCase()} Products</Heading>
      <Loading status={loading} error={error}>
        <>
          {
            <GridList
              records={productFullInfo}
              renderItem={(record) => <Product {...record} />}
            />
          }
        </>
      </Loading>
    </Container>
  );
};

export default Products;
