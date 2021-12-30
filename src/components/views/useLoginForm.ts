import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "store/UserData/Actions";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EUserDataActionTypes } from "store/UserData/Types";

export const useLoginForm = () => {
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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formError = useAppSelector((state) => state.userDataReducer.errorMsg);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleRegistration = (): void => {
    dispatch({ type: EUserDataActionTypes.CLEAR_ERROR });
    navigate("/signup");
  };

  const handleLogin: SubmitHandler<IFormInputs> = async ({
    email,
    password,
  }) => {
    dispatch({ type: EUserDataActionTypes.CLEAR_ERROR });
    try {
      await dispatch(login(email, password));
    } catch (err) {
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
    handleRegistration,
    handleLogin,
  };
};
