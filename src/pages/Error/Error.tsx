import { LottieHandler } from "@components/feedback";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Container>
      <LottieHandler type="notFound" />
      <Link to="/" replace={true}>
        Back to home?!
      </Link>
    </Container>
  );
}

export default Error;
