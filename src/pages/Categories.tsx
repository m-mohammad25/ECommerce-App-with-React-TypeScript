import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(actGetCategories());
  }, []);

  const categoriesList = records.map((record) => (
    <Col
      xs={6}
      md={3}
      className="d-flex justify-content-center mb-5 mt-2"
      key={record.id}
    >
      <Category {...record} />
    </Col>
  ));

  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default Categories;
