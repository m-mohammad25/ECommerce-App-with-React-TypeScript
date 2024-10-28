import { LottieHandler } from "@components/feedback";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Container>
      <div className="d-flex flex-column justify-items-center align-items-center">
        <LottieHandler type="notFound" />
        <Link to="/" replace={true}>
          Back to home?!
        </Link>
      </div>
    </Container>
  );
}

export default Error;
