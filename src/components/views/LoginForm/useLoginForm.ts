import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "store/UserData/Actions";
import { useAppDispatch } from "store/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Podaj poprawny adres e-mail")
      .required("Wymagane pole"),
    password: yup.string().required("Wymagane pole"),
  })
  .required();

export const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formError, setformError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleRegistrationRedirect = (): void => {
    navigate("/registration");
  };

  const handleLogin: SubmitHandler<IFormInputs> = async ({
    email,
    password,
  }) => {
    setformError("");
    try {
      await dispatch(login(email, password));
      navigate("/");
    } catch (error: any) {
      setformError(error.message);
      reset();
    }
  };

  return {
    form: {
      register,
      handleSubmit,
      errors,
    },
    formError,
    handleRegistrationRedirect,
    handleLogin,
  };
};
