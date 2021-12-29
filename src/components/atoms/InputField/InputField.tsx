import {
  FieldWrapper,
  StyledInput,
  StyledLabel,
  StyledErrorMsg,
} from "./InputField.styled";

interface IInputFieldProps {
  label: string;
  type: "text" | "password" | "email" | "password";
  error?: string;
}

const InputField: React.FC<IInputFieldProps> = ({ label, type, error }) => {
  console.log("input", label);
  return (
    <FieldWrapper>
      <StyledInput type={type} isInvalid={!!error} />
      <StyledLabel isInvalid={!!error}>{label}</StyledLabel>
      <StyledErrorMsg>{error}</StyledErrorMsg>
    </FieldWrapper>
  );
};

export default InputField;
