import { StyledSeparator, StyledSeparatorText } from "./Separator.styled";

interface ISeparatorProps {
  text?: string;
}

const Separator: React.FC<ISeparatorProps> = ({ text }) => {
  return (
    <StyledSeparator>
      {text && <StyledSeparatorText>{text}</StyledSeparatorText>}
    </StyledSeparator>
  );
};

export default Separator;
