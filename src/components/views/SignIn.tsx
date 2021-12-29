import Button from "components/atoms/Button/Button";
import InputField from "components/atoms/InputField/InputField";
import Headline from "components/atoms/Headline/Headline";
import Separator from "components/atoms/Separator/Separator";
import {
  SectionBackgroundContainer,
  SectionWrapper,
} from "components/atoms/Wrappers/Wrappers.styled";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleRegistration = (): void => {
    navigate("/signup");
  };
  return (
    <SectionBackgroundContainer>
      <SectionWrapper>
        <Headline size={2}>Logowanie</Headline>
        <InputField label="Email" type="email" />
        <InputField label="Hasło" type="password" />
        <Button
          text="Zaloguj się"
          type={"submit"}
          clickHandler={() => console.log("xd")}
        />
        <Separator text="Nie masz jeszcze konta?" />
        <Button
          text="Zarejestruj się"
          type={"button"}
          clickHandler={handleRegistration}
          isSecondary
        />
      </SectionWrapper>
    </SectionBackgroundContainer>
  );
};

export default SignIn;
