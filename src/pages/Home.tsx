import { Landing } from "@components/Common";
import { Collections } from "@components/Common";
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
    </>
  );
}

export default Home;
