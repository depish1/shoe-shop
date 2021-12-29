import Button from "components/atoms/Button/Button";
import {
  SectionBackgroundContainer,
  SectionWrapper,
} from "components/atoms/Wrappers/Wrappers.styled";

const SignIn: React.FC = () => {
  return (
    <SectionBackgroundContainer>
      <SectionWrapper>
        <Button text="Zaloguj się" clickHandler={() => console.log("xd")} />
      </SectionWrapper>
    </SectionBackgroundContainer>
  );
};

export default SignIn;
