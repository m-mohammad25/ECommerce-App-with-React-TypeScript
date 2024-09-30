import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import {
  actGetCatProdcuts,
  productsCleanUp,
} from "@store/Products/productsSlice";
import { useParams } from "react-router-dom";

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

  const productsList = records.map((record) => (
    <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
      <Product {...record} />
    </Col>
  ));
  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};

export default Products;
