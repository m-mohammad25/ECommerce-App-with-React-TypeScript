import { useEffect } from "react";

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
function useRegister() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { error, loading, accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
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

  return {
    error,
    loading,
    emailAvailabilityStatus,
    emailOnBlurHandler,
    onSubmit,
    register,
    handleSubmit,
    formErrors,
  };
}

export default useRegister;
