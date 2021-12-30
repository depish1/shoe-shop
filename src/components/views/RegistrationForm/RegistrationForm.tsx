import Button from "components/atoms/Button/Button";
import InputField from "components/atoms/InputField/InputField";
import Headline from "components/atoms/Headline/Headline";
import Separator from "components/atoms/Separator/Separator";
import { useRegistrationForm } from "./useRegistrationForm";
import { ErrorMsg } from "components/atoms/ErrorMsg/ErrorMsg.styled";
import {
  SectionBackgroundContainer,
  SectionWrapper,
} from "components/atoms/Wrappers/Wrappers.styled";

const RegistrationForm: React.FC = () => {
  const {
    form: { register, handleSubmit, errors },
    formError,
    handleLoginRedirect,
    handleRegister,
  } = useRegistrationForm();
  return (
    <SectionBackgroundContainer>
      <SectionWrapper>
        <Headline size={2}>Logowanie</Headline>
        <form onSubmit={handleSubmit(handleRegister)}>
          <InputField
            label="Imię"
            type="text"
            error={errors.name?.message}
            formProps={register("name")}
          />
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
          <InputField
            label="Powtórz hasło"
            type="password"
            error={errors.confirmPassword?.message}
            formProps={register("confirmPassword")}
          />
          <Button text="Zarejestruj się" type={"submit"} />
          {formError && <ErrorMsg>{formError}</ErrorMsg>}
        </form>
        <Separator text="Masz już konto?" />
        <Button
          text="Zaloguj się"
          type={"button"}
          clickHandler={handleLoginRedirect}
          isSecondary
        />
      </SectionWrapper>
    </SectionBackgroundContainer>
  );
};

export default RegistrationForm;
