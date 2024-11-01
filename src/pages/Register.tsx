import { useForm, SubmitHandler } from "react-hook-form";
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
  } = useForm<singUpTypes>({
    resolver: zodResolver(signUpFormValidationSchema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<singUpTypes> = (data) => {
    console.log(data);
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
              error={errors.email?.message}
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
