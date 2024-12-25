import { Landing, Collections, Trends } from "@components/Common";
import ProductsSlider from "@components/eCommerce/ProductsSlider/ProductsSlider";
import { Col, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <Row>
        <Col>
          <Landing />
        </Col>
      </Row>
      <Collections />
      <ProductsSlider />
      <Trends />
    </>
  );
}

export default Home;
