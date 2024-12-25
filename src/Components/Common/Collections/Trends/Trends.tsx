import { Col, Row } from "react-bootstrap";
import "./style.css";
import TrendCard from "./TrendCard/TrendCard";

function Trends() {
  return (
    <section id="news">
      <div className="news-heading">
        <p>LATEST NEWS</p>
        <h2 className="mb-5">Fashion New Trends</h2>
      </div>
      <Row>
        <Col
          style={{ marginBottom: "210px" }}
          className="d-flex justify-content-center mb-xl-0"
        >
          <TrendCard
            title="What Curling Irons Are The Best Ones"
            imgSrc="https://i.postimg.cc/2y6wbZCm/news1.jpg"
            linkTarget="https://www.vogue.com/article/best-curling-irons"
            date="12 February 2022"
          />
        </Col>
        <Col
          style={{ marginBottom: "210px" }}
          className="d-flex justify-content-center mb-xl-0"
        >
          <TrendCard
            title="The Health Benefits Of Sunglasses"
            imgSrc="https://i.postimg.cc/9MXPK7RT/news2.jpg"
            linkTarget="https://www.rivieraopticare.com/blog/314864-the-health-benefits-of-wearing-sunglasses_2/"
            date="17 February 2022"
          />
        </Col>
        <Col
          style={{ marginBottom: "210px" }}
          className="d-flex justify-content-center mb-xl-0"
        >
          <TrendCard
            title="Eternity Bands Do Last Forever"
            imgSrc="https://i.postimg.cc/x1KKdRLM/news3.jpg"
            linkTarget="https://www.briangavindiamonds.com/news/eternity-bands-symbolize-love-that-lasts-forever/"
            date="26 February 2022"
          />
        </Col>
      </Row>
    </section>
  );
}

export default Trends;
