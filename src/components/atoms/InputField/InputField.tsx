import { UseFormRegisterReturn } from "react-hook-form";
import {
  FieldWrapper,
  StyledInput,
  StyledLabel,
  StyledErrorMsg,
} from "./InputField.styled";

interface IInputFieldProps {
  label: string;
  type: "text" | "password" | "email" | "password";
  formProps: UseFormRegisterReturn;
  error?: string;
}

const InputField: React.FC<IInputFieldProps> = ({
  label,
  type,
  error,
  formProps,
}) => {
  return (
    <FieldWrapper>
      <StyledInput type={type} isInvalid={!!error} {...formProps} />
      <StyledLabel isInvalid={!!error}>{label}</StyledLabel>
      {error && <StyledErrorMsg>{error}</StyledErrorMsg>}
    </FieldWrapper>
  );
};

export default InputField;
