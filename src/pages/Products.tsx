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

const Products = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(actGetCatProdcuts(prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <>
          {
            <GridList
              records={records}
              renderItem={(record) => <Product {...record} />}
            />
          }
        </>
      </Loading>
    </Container>
  );
};

export default Products;
