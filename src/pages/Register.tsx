import { useForm, SubmitHandler } from "react-hook-form";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signUpFormValidationSchema,
  singUpTypes,
} from "@validations/signUpFormValidationSchema";
import { Heading } from "@components/Common";
import { Input } from "@components/Form";
import { Form, Button, Row, Col } from "react-bootstrap";

function Register() {
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
    console.log(data);
  };

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const { isDirty, invalid } = getFieldState("email"); //isDirty: means it's not blank. invalid means it doesn't match validation rules.
    const value = e.target.value;

    if (isDirty && !invalid && enteredEmail !== value) {
      // checking
      console.log(value, enteredEmail);
      checkEmailAvailability(value);
    }
    if (isDirty && !invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }

    console.log(emailAvailabilityStatus);
  };
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

            <Button variant="info" type="submit" style={{ color: "white" }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;
