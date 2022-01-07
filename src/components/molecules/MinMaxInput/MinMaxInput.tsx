import {
  StyledInput,
  StyledBigLabel,
  StyledWrapper,
  StyledInputWrapper,
} from "./MinMaxInput.styled";

interface IMinMaxInputProps {
  bigLabel: string;
}

const MinMaxInput: React.FC<IMinMaxInputProps> = ({ bigLabel, children }) => {
  return (
    <StyledWrapper>
      <StyledBigLabel>{bigLabel}</StyledBigLabel>
      {children}
    </StyledWrapper>
  );
};

export default MinMaxInput;
