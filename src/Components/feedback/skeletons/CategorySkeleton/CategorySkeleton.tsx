import ContentLoader from "react-content-loader";
import { Col, Row } from "react-bootstrap";

function CategorySkeleton() {
  const renderSkeleton = Array(4)
    .fill(0)
    .map((_, idx) => (
      <Col
        key={idx}
        xs={6}
        md={3}
        className="d-flex justify-content-center mb-5 mt-2"
      >
        <ContentLoader
          speed={2}
          width={180}
          height={207}
          viewBox="0 0 180 207"
          backgroundColor="#f0ebeb"
          foregroundColor="#fdf7f7"
        >
          <circle cx="95" cy="85" r="82" />
          <rect x="45" y="180" rx="13" ry="13" width="100" height="10" />
        </ContentLoader>
      </Col>
    ));

  return <Row>{renderSkeleton}</Row>;
}

export default CategorySkeleton;
