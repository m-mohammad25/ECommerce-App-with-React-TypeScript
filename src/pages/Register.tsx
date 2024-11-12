import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { actAuthRegister, resetUI } from "@store/Auth/AuthSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signUpFormValidationSchema,
  singUpTypes,
} from "@validations/signUpFormValidationSchema";
import { Heading } from "@components/Common";
import { Input } from "@components/Form";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { useEffect } from "react";

function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { error, loading, accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getFieldState,
    trigger,
  } = useForm<singUpTypes>({
    resolver: zodResolver(signUpFormValidationSchema),
    mode: "onBlur",
  });

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const onSubmit: SubmitHandler<singUpTypes> = (data) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => {
        //redirect to login page
        navigate(
          "/login?message=Your account has been created successfully, please login"
        );
      });
  };

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const { isDirty, invalid } = getFieldState("email"); //isDirty: means it's not blank. invalid means it doesn't match validation rules.
    const value = e.target.value;

    if (isDirty && !invalid && enteredEmail !== value) {
      checkEmailAvailability(value);
    }
    if (isDirty && !invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  if (accessToken) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, []);
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
              error={errors.firstName?.message}
            />

            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName?.message}
            />

            <Input
              label="Email address"
              name="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                errors.email?.message
                  ? errors.email?.message
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
              error={errors.password?.message}
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
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
