import { Heading } from "@components/Common";
import { Input } from "@components/Form";
import useRegister from "@hooks/useRegister";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";

function Register() {
  const {
    error,
    loading,
    emailAvailabilityStatus,
    emailOnBlurHandler,
    onSubmit,
    register,
    handleSubmit,
    formErrors,
  } = useRegister();
  return (
    <>
      <Heading title="User Registeration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={formErrors.firstName?.message}
            />

            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={formErrors.lastName?.message}
            />

            <Input
              label="Email address"
              name="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                formErrors.email?.message
                  ? formErrors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available"
                  : ""
              }
              checkingMsg={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" ? true : false}
            />

            <Input
              label="Password"
              name="password"
              register={register}
              error={formErrors.password?.message}
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              register={register}
              error={formErrors.confirmPassword?.message}
            />

            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={
                emailAvailabilityStatus === "checking"
                  ? true
                  : false || loading === "pending"
              }
            >
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

export default Register;
