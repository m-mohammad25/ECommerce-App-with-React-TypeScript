import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthLogin, resetUI } from "@store/Auth/AuthSlice";

import { Heading } from "@components/Common";
import { Input } from "@components/Form";

import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  singInTypes,
  signInFormValidationSchema,
} from "@validations/signInFormValidationSchema";

import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { useEffect } from "react";

function Login() {
  const dispatch = useAppDispatch();

  const { loading, error, accessToken } = useAppSelector((state) => state.auth);

  //destract message param from the url
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<singInTypes>({
    resolver: zodResolver(signInFormValidationSchema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<singInTypes> = (data) => {
    if (searchParams.get("message")) {
      setSearchParams("");
    }
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => {
        navigate("/");
      });
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
              error={errors.email?.message}
            />

            <Input
              label="Password"
              name="password"
              register={register}
              error={errors.password?.message}
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
