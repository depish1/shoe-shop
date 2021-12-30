import Button from "components/atoms/Button/Button";
import InputField from "components/atoms/InputField/InputField";
import Headline from "components/atoms/Headline/Headline";
import Separator from "components/atoms/Separator/Separator";
import { useLoginForm } from "./useLoginForm";
import { ErrorMsg } from "components/atoms/ErrorMsg/ErrorMsg.styled";
import {
  SectionBackgroundContainer,
  SectionWrapper,
} from "components/atoms/Wrappers/Wrappers.styled";

const LoginForm: React.FC = () => {
  const {
    form: { register, handleSubmit, errors },
    formError,
    handleRegistrationRedirect,
    handleLogin,
  } = useLoginForm();

  return (
    <SectionBackgroundContainer>
      <SectionWrapper>
        <Headline size={2}>Logowanie</Headline>
        <form onSubmit={handleSubmit(handleLogin)}>
          <InputField
            label="Email"
            type="email"
            error={errors.email?.message}
            formProps={register("email")}
          />
          <InputField
            label="Hasło"
            type="password"
            error={errors.password?.message}
            formProps={register("password")}
          />
          <Button text="Zaloguj się" type={"submit"} />
          {formError && <ErrorMsg>{formError}</ErrorMsg>}
        </form>
        <Separator text="Nie masz jeszcze konta?" />
        <Button
          text="Zarejestruj się"
          type={"button"}
          clickHandler={handleRegistrationRedirect}
          isSecondary
        />
      </SectionWrapper>
    </SectionBackgroundContainer>
  );
};

export default LoginForm;
