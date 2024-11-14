import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthLogin, resetUI } from "@store/Auth/AuthSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  singInTypes,
  signInFormValidationSchema,
} from "@validations/signInFormValidationSchema";
function useLogin() {
  const dispatch = useAppDispatch();

  const { loading, error, accessToken } = useAppSelector((state) => state.auth);

  //destract message param from the url
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
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

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, []);
  return {
    handleSubmit,
    loading,
    error,
    accessToken,
    formErrors,
    register,
    onSubmit,
    searchParams,
  };
}

export default useLogin;
