import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

type THasID = { id?: number };
function GridList<T extends THasID>({ records, renderItem }: GridListProps<T>) {
  const categoriesList = records.map((record) => (
    <Col
      xs={6}
      md={3}
      className="d-flex justify-content-center mb-5 mt-2"
      key={record.id}
    >
      {renderItem(record)}
    </Col>
  ));

  return <Row>{categoriesList}</Row>;
}

export default GridList;
