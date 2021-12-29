import { StyledLogo, FirstTextPart, SecondTextPart } from "./Logo.styled";

interface ILogoProps {
  textPart1: string;
  textPart2: string;
}

const Logo: React.FC<ILogoProps> = ({ textPart1, textPart2 }) => {
  return (
    <StyledLogo>
      <FirstTextPart>{textPart1}</FirstTextPart>
      <SecondTextPart>{textPart2}</SecondTextPart>
    </StyledLogo>
  );
};

export default Logo;
