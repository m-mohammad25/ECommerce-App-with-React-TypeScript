import { Container } from "react-bootstrap";
import styles from "./style.module.css";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const { notFound } = styles;
function Error() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    //if there is a router error
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <Container className={notFound}>
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        Back to home?!
      </Link>
    </Container>
  );
}

export default Error;
