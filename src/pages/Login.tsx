import { Heading } from "@components/Common";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  singInTypes,
  signInFormValidationSchema,
} from "@validations/signInFormValidationSchema";
import { Input } from "@components/Form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<singInTypes>({
    resolver: zodResolver(signInFormValidationSchema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<singInTypes> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
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

            <Button variant="info" type="submit" style={{ color: "white" }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;
