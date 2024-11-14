import { Heading } from "@components/Common";
import { Input } from "@components/Form";

import { Navigate } from "react-router-dom";

import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import useLogin from "@hooks/useLogin";

function Login() {
  const {
    handleSubmit,
    loading,
    error,
    accessToken,
    formErrors,
    register,
    onSubmit,
    searchParams,
  } = useLogin();
  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Heading title="User Login" />
      {searchParams.get("message") && (
        <Alert variant="success"> {searchParams.get("message")}</Alert>
      )}
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              name="email"
              register={register}
              error={formErrors.email?.message}
            />

            <Input
              label="Password"
              name="password"
              register={register}
              error={formErrors.password?.message}
            />

            <Button variant="info" type="submit" style={{ color: "white" }}>
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm" /> Loading...{" "}
                </>
              ) : (
                "Submit"
              )}
            </Button>
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;
