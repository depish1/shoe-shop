import { StyledLogo, FirstTextPart, SecondTextPart } from "./Logo.styled";

interface ILogoProps {
  textPart1: string;
  textPart2: string;
}

const Logo: React.FC<ILogoProps> = ({ textPart1, textPart2 }) => {
  return (
    <h1>
      <StyledLogo to="/">
        <FirstTextPart>{textPart1}</FirstTextPart>
        <SecondTextPart>{textPart2}</SecondTextPart>
      </StyledLogo>
    </h1>
  );
};

export default Logo;
