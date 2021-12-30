import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FirebaseMethods } from "utils/firebase/FirebaseHelper";
import { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { EUserDataActionTypes } from "store/UserData/Types";

interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    name: yup.string().required("Wymagane pole"),
    email: yup
      .string()
      .required("Wymagane pole")
      .email("Podaj poprawny adres e-mail"),
    password: yup
      .string()
      .required("Wymagane pole")
      .min(6, "Hasło musi mieć minimum 6 znaków"),
    confirmPassword: yup
      .string()
      .required("Wymagane pole")
      .oneOf([yup.ref("password"), null], "Hasła muszą być jednakowe"),
  })
  .required();

export const useRegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formError, setformError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleLoginRedirect = (): void => {
    navigate("/login");
  };

  const handleRegister: SubmitHandler<IFormInputs> = async ({
    email,
    password,
    name,
  }) => {
    dispatch({
      type: EUserDataActionTypes.AUTH_LOADING_ON,
    });
    const data = {
      name: name,
      adress: {},
    };
    try {
      setformError("");
      await FirebaseMethods.createNewUser(email, password, data);
      navigate("/login");
      dispatch({
        type: EUserDataActionTypes.AUTH_LOADING_OFF,
      });
    } catch (error: any) {
      setformError(error.message);
      dispatch({
        type: EUserDataActionTypes.AUTH_LOADING_OFF,
      });
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
    handleLoginRedirect,
    handleRegister,
  };
};
