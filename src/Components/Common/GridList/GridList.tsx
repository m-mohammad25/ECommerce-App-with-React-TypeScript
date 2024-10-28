import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  emptyMessage?: string;
};

type THasID = { id?: number };
function GridList<T extends THasID>({
  records,
  renderItem,
  emptyMessage,
}: GridListProps<T>) {
  const renderList =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
          key={record.id}
        >
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <Col className="d-flex align-items-center justify-content-center">
        <LottieHandler type="notFound" message={emptyMessage} />
      </Col>
    );

  return <Row>{renderList}</Row>;
}

export default GridList;
